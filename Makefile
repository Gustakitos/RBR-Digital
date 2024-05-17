.PHONY: up down build

up:
	docker-compose up -d

down:
	docker-compose down -d

build:
	docker-compose build

seed-db:
	docker-compose exec backend node scripts/init-db.js
