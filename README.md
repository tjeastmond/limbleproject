# Limble Coding Challenge

Thank you for taking the time to review my submission for the Limble coding challenge. I have included a brief overview of the project below, as well as instructions for setting up the project on your local machine.

## Installation and Setup

Installing this project is easy. Everything runs with the Docker Compose CLI using the file supplied with the initial repository. After cloning this repo, you just need to run a few commands to get it up and running.

### Docker Compose

```bash
# the first time you run the project use this command
docker compose up
```

After the initial setup, just run the following command to start the server next time:

```bash
docker compose start
```

### The Migration
The migration that runs will create tables and seed the database with some initial data. If you want to run the migration again, you can just run:

```bash
docker compose migration
```
The bash script was updated to drop table before creating it, so you can run the migration multiple times without any issues.

## Using the API

There are a few endpoints that you can use to interact with the API. The base URL can be found in your terminal after running the `docker compose` commands. The endpoints are as follows:

- GET - https://your-server.dev/wages/workers
- GET - https://your-server.dev/wages/locations
- GET - https://your-server.dev/wages/tasks
- GET - https://your-server.dev/locations (no filtering available)

### Filtering

You can filter the results by adding query parameters to the URL. The three filters available are `locations`, `works`, and `tasks`. When filtering `locations` and `workers`, you use a comma seperated string of numbers in the query parameter. For example, to filter by location 1 and 2, you would use the following URL:

```
https://localhost:3000/wages/workers?location=1,2
```
The above will return all workers that have worked on tasks for location 1 or 2.

You can also filter results by tasks status. The available flags for filtering are simply `0` or `1`. For example:

```
# filter by completed tasks
https://localhost:3000/wages/tasks?status=1

# filter by incomplete tasks
https://localhost:3000/wages/tasks?status=0
```
Here are a few more examples of filtering:

```
# filter by location 1 and 2 and task status is completed
https://localhost:3000/wages/workers?location=1,2&status=1

# get a list of locations that workers have been to
https://localhost:3000/wages/locations?workers=2,6

# get a list of locations that workers have completed projects at
https://localhost:3000/wages/workers?locations=2&status=1
```

## Running Tests

The tests are written using Jest and can be run using the following command:

```bash
npx test

# optionally add the --coverage flag to see test coverage
npx test --coverage

# or run the tests via docker
docker compose test
```

Note that one of the tests causes a `console.log` to be printed. This is intentional and is used to test the output of the test.
