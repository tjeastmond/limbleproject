function baseCTE(where: string) {
  const query = `
  with worker_task_pay as (
    select
      t.location_id
      , lt.task_id
      , w.id as worker_id
      , w.username as worker_name
      , l.name as location_name
      , t.description as task_name
      , t.status
      , sum(lt.time_seconds) as total_seconds
      , sum(lt.time_seconds * w.hourly_wage) as wages_cents
    from logged_time lt
    join tasks t on lt.task_id = t.id
    join workers w on lt.worker_id = w.id
    join locations l on t.location_id = l.id
    ${where}
    group by t.location_id, lt.task_id, w.id
  ),`;

  return query;
}

export function wagesByWorker(where: string) {
  const query = `
  ${baseCTE(where)}
  worker_totals as (
    select
      worker_id
      , worker_name
      , sum(total_seconds) as worker_seconds
      , sum(wages_cents) as worker_wages_cents
    from worker_task_pay
    group by worker_id
  )

  select
    w.worker_id,
    w.worker_name,
    w.worker_seconds,
    w.worker_wages_cents,
    round(w.worker_wages_cents / 3600, 2) as worker_wages
  from worker_totals w
  order by w.worker_id`;

  return query;
}

export function wagesByLocation(where: string) {
  const query = `
  ${baseCTE(where)}
  location_totals as (
    select
      location_id
      , location_name
      , sum(total_seconds) as location_seconds
      , sum(wages_cents) as location_wages_cents
    from worker_task_pay
    group by location_id, location_name
  )

  select
    l.location_id
    , l.location_name
    , l.location_seconds
    , l.location_wages_cents
    , round(l.location_wages_cents / 3600, 2) as location_wages
  from location_totals l
  group by l.location_id
  order by l.location_id`;

  return query;
}

export function wagesByTask(where: string) {
  const query = `
  ${baseCTE(where)}
  task_totals as (
    select
      location_id
      , task_id
      , task_name
      , status
      , sum(total_seconds) as task_seconds
      , sum(wages_cents) as task_wages_cents
    from worker_task_pay
    group by location_id, task_id
  ),

  location_totals as (
    select
      location_id
      , location_name
      , sum(total_seconds) as location_seconds
      , sum(wages_cents) as location_wages_cents
    from worker_task_pay
    group by location_id, location_name
  )

  select
    t.location_id
    , l.location_name
    , t.task_name
    , sum(t.task_seconds) as task_seconds
    , l.location_seconds
    , sum(t.task_wages_cents) as task_wages_cents
    , round(sum(t.task_wages_cents) / 3600 ,2) as task_wages
    , l.location_wages_cents
    , round(l.location_wages_cents / 3600, 2) as location_wages
  from task_totals t
  left join location_totals l on t.location_id = l.location_id
  group by t.task_id, t.location_id
  order by t.location_id, t.task_id`;

  return query;
}
