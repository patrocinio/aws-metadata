build:
	docker build --tag patrocinio/aws-metadata .

push:
	docker push patrocinio/aws-metadata

run:
	docker run -p 8080:8080 patrocinio/aws-metadata 