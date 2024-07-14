-- Insert locations
INSERT INTO locations (name) VALUES
('New York'),
('Los Angeles'),
('Chicago');

-- Insert workers
INSERT INTO workers (username, hourly_wage) VALUES
('worker1', 20.00),
('worker2', 22.50),
('worker3', 18.75),
('worker4', 25.00),
('worker5', 19.00),
('worker6', 21.00),
('worker7', 23.00),
('worker8', 20.50),
('worker9', 22.00),
('worker10', 24.00);

-- Insert tasks
INSERT INTO tasks (description, location_id, status) VALUES
('Task 1', 1, TRUE),
('Task 2', 1, FALSE),
('Task 3', 2, TRUE),
('Task 4', 2, FALSE),
('Task 5', 3, TRUE),
('Task 6', 3, FALSE),
('Task 7', 1, TRUE),
('Task 8', 2, FALSE),
('Task 9', 3, TRUE),
('Task 10', 1, FALSE),
('Task 11', 2, TRUE),
('Task 12', 3, FALSE),
('Task 13', 1, TRUE),
('Task 14', 2, FALSE),
('Task 15', 3, TRUE);

-- Insert logged_time entries
INSERT INTO logged_time (time_seconds, task_id, worker_id) VALUES
(3600, 1, 1),   -- worker1 logged 1 hour on Task 1
(7200, 2, 2),   -- worker2 logged 2 hours on Task 2
(1800, 3, 3),   -- worker3 logged 0.5 hour on Task 3
(5400, 4, 4),   -- worker4 logged 1.5 hours on Task 4
(3600, 5, 5),   -- worker5 logged 1 hour on Task 5
(7200, 6, 1),   -- worker1 logged 2 hours on Task 6
(1800, 7, 2),   -- worker2 logged 0.5 hour on Task 7
(5400, 8, 3),   -- worker3 logged 1.5 hours on Task 8
(3600, 9, 4),   -- worker4 logged 1 hour on Task 9
(7200, 10, 5),  -- worker5 logged 2 hours on Task 10
(3600, 11, 6),  -- worker6 logged 1 hour on Task 11
(7200, 12, 7),  -- worker7 logged 2 hours on Task 12
(1800, 13, 8),  -- worker8 logged 0.5 hour on Task 13
(5400, 14, 9),  -- worker9 logged 1.5 hours on Task 14
(3600, 15, 10), -- worker10 logged 1 hour on Task 15
(7200, 1, 1),   -- worker1 logged 2 hours on Task 1
(1800, 2, 2),   -- worker2 logged 0.5 hour on Task 2
(5400, 3, 3),   -- worker3 logged 1.5 hours on Task 3
(3600, 4, 4),   -- worker4 logged 1 hour on Task 4
(7200, 5, 5),   -- worker5 logged 2 hours on Task 5
(3600, 6, 6),   -- worker6 logged 1 hour on Task 6
(7200, 7, 7),   -- worker7 logged 2 hours on Task 7
(1800, 8, 8),   -- worker8 logged 0.5 hour on Task 8
(5400, 9, 9),   -- worker9 logged 1.5 hours on Task 9
(3600, 10, 10), -- worker10 logged 1 hour on Task 10
(7200, 11, 1),  -- worker1 logged 2 hours on Task 11
(1800, 12, 2),  -- worker2 logged 0.5 hour on Task 12
(5400, 13, 3),  -- worker3 logged 1.5 hours on Task 13
(3600, 14, 4),  -- worker4 logged 1 hour on Task 14
(7200, 15, 5),  -- worker5 logged 2 hours on Task 15
(3600, 1, 6),   -- worker6 logged 1 hour on Task 1
(7200, 2, 7),   -- worker7 logged 2 hours on Task 2
(1800, 3, 8),   -- worker8 logged 0.5 hour on Task 3
(5400, 4, 9),   -- worker9 logged 1.5 hours on Task 4
(3600, 5, 10),  -- worker10 logged 1 hour on Task 5
(7200, 6, 1),   -- worker1 logged 2 hours on Task 6
(1800, 7, 2),   -- worker2 logged 0.5 hour on Task 7
(5400, 8, 3),   -- worker3 logged 1.5 hours on Task 8
(3600, 9, 4),   -- worker4 logged 1 hour on Task 9
(7200, 10, 5),  -- worker5 logged 2 hours on Task 10
(3600, 11, 6),  -- worker6 logged 1 hour on Task 11
(7200, 12, 7),  -- worker7 logged 2 hours on Task 12
(1800, 13, 8),  -- worker8 logged 0.5 hour on Task 13
(5400, 14, 9),  -- worker9 logged 1.5 hours on Task 14
(3600, 15, 10); -- worker10 logged 1 hour on Task 15
