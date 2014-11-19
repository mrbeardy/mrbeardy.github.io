(function() {
  var App, lorem, posts,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App = Ember.Application.create();

  App.Router.map(function() {
    this.resource("about");
    return this.resource("posts", function() {
      return this.resource("post", {
        path: ":post_id"
      });
    });
  });

  App.PostsRoute = (function(_super) {
    __extends(PostsRoute, _super);

    function PostsRoute() {
      return PostsRoute.__super__.constructor.apply(this, arguments);
    }

    PostsRoute.prototype.model = function() {
      return posts;
    };

    return PostsRoute;

  })(Ember.Route);

  App.PostRoute = (function(_super) {
    __extends(PostRoute, _super);

    function PostRoute() {
      return PostRoute.__super__.constructor.apply(this, arguments);
    }

    PostRoute.prototype.model = function(params) {
      return posts.findBy("id", params.post_id);
    };

    return PostRoute;

  })(Ember.Route);

  App.IndexRoute = (function(_super) {
    __extends(IndexRoute, _super);

    function IndexRoute() {
      return IndexRoute.__super__.constructor.apply(this, arguments);
    }

    IndexRoute.prototype.beforeModel = function() {
      return this.transitionTo("about");
    };

    return IndexRoute;

  })(Ember.Route);

  lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi fugiat ab reprehenderit. Reiciendis dolorum, perspiciatis cupiditate. Sed quo, cum magni quod quisquam, veritatis, tempora fuga voluptate ab natus laboriosam!";

  posts = [
    {
      id: "1",
      title: "This is a post",
      author: {
        name: "Beardy"
      },
      date: new Date('12-26-2012'),
      excerpt: "blah blah blah",
      body: _.shuffle(lorem.split(" ")).join(" ", ",")
    }, {
      id: "2",
      title: "This is another post",
      author: {
        name: "Anonymous"
      },
      date: new Date('02-06-2012'),
      excerpt: "blah blah blah",
      body: _.shuffle(lorem.split(" ")).join(" ", ",") + "\n\n" + _.shuffle(lorem.split(" ")).join(" ", ",") + "\n\n" + _.shuffle(lorem.split(" ")).join(" ", ",")
    }
  ];

}).call(this);
