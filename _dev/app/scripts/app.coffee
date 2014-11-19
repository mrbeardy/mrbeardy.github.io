App = Ember.Application.create()

App.Router.map ->
	@resource "about"
	@resource "posts", ->
		@resource "post", path: ":post_id"

class App.PostsRoute extends Ember.Route
	model: ->
		return posts

class App.PostRoute extends Ember.Route
	model: (params)->
		return posts.findBy "id", params.post_id

class App.IndexRoute extends Ember.Route
	beforeModel: ->
		@transitionTo "about" 

lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi fugiat ab reprehenderit. Reiciendis dolorum, perspiciatis cupiditate. Sed quo, cum magni quod quisquam, veritatis, tempora fuga voluptate ab natus laboriosam!"

posts = [
	{
		id: "1"
		title: "This is a post"
		author: { name: "Beardy" }
		date: new Date('12-26-2012')
		excerpt: "blah blah blah"
		body: _.shuffle(lorem.split(" ")).join(" ", ",")
	}

	{
		id: "2"
		title: "This is another post"
		author: { name: "Anonymous" }
		date: new Date('02-06-2012')
		excerpt: "blah blah blah"
		body: _.shuffle(lorem.split(" ")).join(" ", ",") + "\n\n" + _.shuffle(lorem.split(" ")).join(" ", ",") + "\n\n" +  _.shuffle(lorem.split(" ")).join(" ", ",")
	}
]