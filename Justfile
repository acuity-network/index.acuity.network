set shell := ["bash", "-cu"]

default:
	just --list

build:
	zola build

serve:
	zola serve

deploy:
	zola build
	rsync -avhP --stats --del public/ index.acuity.network:index.acuity.network

clean:
	rm -rf public

check:
	just build

fmt:
	just --list
