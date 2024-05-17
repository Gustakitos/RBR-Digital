.PHONY: up down build

up:
	docker-compose up -d

down:
	docker-compose down -d

build:
	docker-compose build

seed-db:
	docker-compose exec backend ts-node scripts/init-db.ts
