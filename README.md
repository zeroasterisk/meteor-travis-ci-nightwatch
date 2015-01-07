# Example of Meteor + Travis CI + Nightwatch

* [meteor.com](https://www.meteor.com/)
* [travis-ci.org](https://travis-ci.org/)
* [nightwatchjs.org](http://nightwatchjs.org/)


![Build Status](https://travis-ci.org/zeroasterisk/meteor-travis-ci-nightwatch.svg)

You can see a [successful build](https://travis-ci.org/zeroasterisk/meteor-travis-ci-nightwatch/builds/46157777)
and an intentional [failed build](https://travis-ci.org/zeroasterisk/meteor-travis-ci-nightwatch/builds/46158099)
in the Travis-CI history of this project.

Right now, we are only using selenium and firefox on travis-ci.

If you want to see how to implement this yourself, take a look at the [.travis.yml](./.travis.yml) file.

![screenshot](http://content.screencast.com/users/alanblount/folders/Jing/media/a83218c2-b8fb-4d32-b5ae-6bde10ff7463/00002932.png)

### Things to notice

* I have chosen to include the selenium stand-alone driver in my git repo,
  you may not want to so.
* I have chosen to explicitly state that tests happen on `http://localhost:3000/`

### TODO

* I am downloading and installing the full Meteor application on every commit,
  it might be worth trying to cache it.
* variation to do a `phantomjs` - which would be faster
* variation to do an API interface to use multiple browser profiles at once - which would be awesome

