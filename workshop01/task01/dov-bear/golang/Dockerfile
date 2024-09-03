FROM golang:1.23-alpine3.20 AS builder
#container to build the app

LABEL maintainer="jaychen"

WORKDIR /src

COPY go.* .
COPY main.go .

RUN go build -o main main.go

# container to run the app
FROM alpine:3.20 AS runner

LABEL maintainer="jaychen"

WORKDIR /app

# copy the binary over from the build container
COPY --from=builder /src/main .
COPY public public
COPY templates templates

ENV PORT=5000
ENV INSTANCE_NAME=dov-bear
ENV INSTANCE_HASH=jaychenyj

EXPOSE ${PORT}

SHELL [ "/bin/sh", "-c" ]
ENTRYPOINT /app/main