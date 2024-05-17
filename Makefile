.PHONY: start stop build

start:
	docker-compose up -d

down:
	docker-compose down

stop:
	docker compose stop

build:
	docker-compose build

restart:
	docker compose up -d --build

seed-db:
	docker-compose exec backend node dist/scripts/init-db.js
