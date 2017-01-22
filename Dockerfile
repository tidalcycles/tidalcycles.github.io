FROM ruby:2.3.1

RUN apt-get update && apt-get install -yq nodejs

WORKDIR /srv/jekyll

ADD Gemfile /srv/jekyll
ADD Gemfile.lock /srv/jekyll

RUN bundle install

CMD ["jekyll", "serve"]
