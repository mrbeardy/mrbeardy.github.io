Ember.TEMPLATES["about"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("About");
  },"useData":true});

Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("About");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Posts");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div id=\"header\">\r\n	<h1>Beardy</h1>\r\n\r\n	<div id=\"topmenu\">\r\n		");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "about", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "posts", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>\r\n\r\n<div id=\"main\">\r\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("\r\n");
  },"useData":true});

Ember.TEMPLATES["post"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" </h2>\r\n<p>");
  stack1 = helpers._triageMustache.call(depth0, "body", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["posts"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "post", "post", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("					<div class=\"post\">");
  stack1 = helpers._triageMustache.call(depth0, "post.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" <i>by ");
  stack1 = helpers._triageMustache.call(depth0, "post.author.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</i></div>\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\r\n<div class=\"posts ui grid\">\r\n	<div class=\"row\">\r\n		<div class=\"sidebar three wide column\">\r\n			<h2>Latest Posts</h2>\r\n");
  stack1 = helpers.each.call(depth0, "post", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("		</div>\r\n\r\n		<div class=\"content thirteen wide column\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
},"useData":true});