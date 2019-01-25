(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[44],{1155:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(121),r=n(127),c=n(25),l=n(1156),s=n.n(l),u=n(1157),d=n.n(u),p=Object(c.a)(s.a,d.a),h=[{name:"1-base",title:Object(c.a)("基本用法 \n 内置了四个弹出方向","Base \n There are four pop-up directions built in."),component:n(1158).default,rawText:n(1159)},{name:"2-click",title:Object(c.a)("点击触发 \n 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click","Click \n Set the trigger property to change the trigger event to 'click'."),component:n(1160).default,rawText:n(1161)}];t.default=Object(a.a)(function(e){return i.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:p,examples:h}))})},1156:function(e,t){e.exports="# Tooltip *提示*\n\nTooltip 主要用来显示文字提示，如果需要显示更多内容，请使用 [Popover](#/components/Popover)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| position | string | 'top' | 弹出层位置，可选值为 \\['left', 'top', 'right', 'bottom'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string | 必填 | 弹出文字 | \n"},1157:function(e,t){e.exports="# Tooltip\n\nTooltip is used to display text prompts, and if you need to more content, use [Popover](#/components/Popover).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| children | ReactElement | required | The child element can only be a ReactElement. |\n| position | string | 'top' | The position of the pop-up layer, options: \\['left', 'top', 'right', 'bottom'] |\n| tip | string | required | Pop up texts |"},1158:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(1268),r=n(130),c={fontSize:20,lineHeight:1,margin:4};t.default=function(){return i.a.createElement("div",null,i.a.createElement(a.a,{tip:"Some text.",position:"left",style:{marginRight:12}},i.a.createElement(r.a,{name:"arrow-circle-o-left",style:c})),i.a.createElement(a.a,{tip:"Some text.",position:"top",style:{marginRight:12}},i.a.createElement(r.a,{name:"arrow-circle-o-up",style:c})),i.a.createElement(a.a,{tip:"Some text.",position:"bottom",style:{marginRight:12}},i.a.createElement(r.a,{name:"arrow-circle-o-down",style:c})),i.a.createElement(a.a,{tip:"Some text.",position:"right",style:{marginRight:12}},i.a.createElement(r.a,{name:"arrow-circle-o-right",style:c})))}},1159:function(e,t){e.exports='/**\n * cn - 基本用法\n *    -- 内置了四个弹出方向\n * en - Base\n *    -- There are four pop-up directions built in.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function() {\n  return (\n    <div>\n      <Tooltip tip="Some text." position="left" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="top" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="bottom" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="right" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},1160:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(1268),r=n(130),c={fontSize:20,lineHeight:1,margin:4};t.default=function(){return i.a.createElement("div",null,i.a.createElement(a.a,{tip:"Some text.",trigger:"click",position:"left"},i.a.createElement(r.a,{name:"arrow-circle-o-left",style:c})),i.a.createElement(a.a,{tip:"Some text.",trigger:"click",position:"top"},i.a.createElement(r.a,{name:"arrow-circle-o-up",style:c})),i.a.createElement(a.a,{tip:"Some text.",trigger:"click",position:"bottom",style:{width:"200px"}},i.a.createElement(r.a,{name:"arrow-circle-o-down",style:c})),i.a.createElement(a.a,{tip:"Some text.",trigger:"click",position:"right"},i.a.createElement(r.a,{name:"arrow-circle-o-right",style:c})))}},1161:function(e,t){e.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n *    -- Set the trigger property to change the trigger event to \'click\'.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function() {\n  return (\n    <div>\n      <Tooltip tip="Some text." trigger="click" position="left">\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="top">\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="bottom" style={{ width: \'200px\' }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="right">\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},121:function(e,t,n){"use strict";var o=n(24),i=n(5),a=n(6),r=n(8),c=n(2),l=n(7),s=n(3),u=n(0),d=n.n(u),p=n(158),h=n(40),m=n(17);t.a=function(t){return function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(r.a)(this,Object(c.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(s.a)(Object(s.a)(t))),t.handleScroll=t.handleScroll.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(o.a)(this.state.headings),Object(o.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var n=document.documentElement.scrollTop,e=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var o=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(o=e.id)}),this.$willUnmount||this.setState({active:o})}}},{key:"renderNav",value:function(){var o=this,e=this.state,i=e.active,t=e.headings;return d.a.createElement(p.a,{className:Object(m.f)("sticky"),top:50},d.a.createElement("div",{className:Object(m.f)("nav")},t.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(m.f)("level-".concat(e.level),i===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(o,e.id)},n)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(m.f)("_")},d.a.createElement(t,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(d.a.Component)}},1268:function(e,t,n){"use strict";var o={};n.r(o),n.d(o,"hide",function(){return r}),n.d(o,"show",function(){return c}),n.d(o,"move",function(){return h}),n.d(o,"isCurrent",function(){return m});var i=n(257),l=n(9),s=document.createElement("div");s.style.display="none",document.body.appendChild(s);var a=document.createElement("div");a.className=Object(l.C)("arrow"),s.appendChild(a);var u,d=document.createElement("div");function r(){s.style.display="none",s.className="",u=void 0}function p(){r(),document.removeEventListener("click",p)}function c(e,t,n){var o=e.position,i=e.style,a=e.tip,r=e.trigger;u=t,s.style.cssText="display: none",Object.keys(i).forEach(function(e){s.style[e]=i[e]});var c=Object(l.C)("_","in",o);setTimeout(function(){s.style.display="block",s.className=c},0),d.innerText=a,d.removeAttribute("style"),n&&Object.keys(n).forEach(function(e){d.style[e]=n[e]}),"click"===r&&document.addEventListener("click",p)}function h(e,t,n){e===u&&(s.style.left="".concat(t,"px"),s.style.top="".concat(n,"px"))}function m(e){return e===u}d.className=Object(l.C)("inner"),s.appendChild(d);var f=Object(i.a)(o);f.displayName="ShineoutTooltip";t.a=f},127:function(e,t,n){"use strict";var h=n(0),m=n.n(h),r=n(21),o=n(24),c=n(5),i=n(6),l=n(8),s=n(2),u=n(7),a=n(3),d=n(160),p=n.n(d),f=n(36),g=n(17),b=n(25),v=n(161),y=n.n(v),j=(n(162),n(163),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).bindElement=function(e){t.element=e},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;y.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return m.a.createElement("pre",{className:this.props.language||"lang-jsx"},m.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),a}(h.PureComponent));j.defaultProps={language:"lang-jsx"};var O=n(147),E=n(32),k=n(27),w=n(134),x=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(w.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(w.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,o=t.placeholder;return e?n:m.a.createElement("span",{ref:this.placeholderRef},o)}}]),n}(k.b),S=n(47),T=n(40),C=m.a.createElement("div",{className:Object(g.a)("placeholder")},m.a.createElement(E.a,null)),H=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"collapse",value:function(e,t,n){var o=this;this.codeblock.style.height="".concat(e*(t-1),"px"),1<t&&setTimeout(function(){o.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(t){var n=this,o=!this.state.showcode;this.setState({showcode:o},function(){if(o)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var e=n.codeHeight%15;0<e&&n.collapse(e,1,t),n.collapse((n.codeHeight-e)/15,15,t)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return m.a.createElement("a",{href:"javascript:;",className:Object(g.a)("toggle"),onClick:this.toggleCode.bind(this,e)},m.a.createElement(S.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,o=e.name,i=e.rawText,a=this.state.showcode,r=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),c=T.a.location.search,l="?example=";if(0===c.indexOf(l)&&(c=c.replace(l,""),o.indexOf(c)<0))return null;var s=this.props.title.split("\n"),u=Object(O.a)(s),d=u[0],p=u.slice(1);return d&&(d=d.trim()),m.a.createElement(h.Fragment,null,d&&m.a.createElement("h3",{key:"0",id:n},d),m.a.createElement(x,{placeholder:C},m.a.createElement("div",{className:Object(g.a)("_",a&&"showcode")},m.a.createElement("div",{className:Object(g.a)("body")},Object(h.createElement)(t)),0<this.props.title.length&&m.a.createElement("div",{className:Object(g.a)("desc")},p.map(function(e,t){return m.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),m.a.createElement("div",{ref:this.bindCodeBlock,className:Object(g.a)("code")},m.a.createElement(j,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:r}),this.renderCodeHandle(!0)))))}}]),n}(h.Component);H.defaultProps={rawText:""};var R=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),o=t?"pre":"div";return m.a.createElement("div",{onClick:this.toggle,className:Object(g.e)("console")},m.a.createElement(o,null,n))}}]),n}(h.PureComponent);R.defaultProps={children:[]};var N=R,P=/^<code name="([\w|-]+)" /,A=/^<example name="([\w|-]+)"/,L=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(s.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,n=e.children,o="".concat(t,"-").concat(n[0]),i="h".concat(t);if("object"==typeof n[0])return m.a.createElement(i,null,n);if(!r.cache[o]){var a="heading-".concat(Object(f.b)());2!==t&&3!==t||r.appendHeading({id:a,level:t,children:n}),r.cache[o]=m.a.createElement(i,{id:a},n)}return r.cache[o]},r.headings=[],r.appendHeading=r.appendHeading.bind(Object(a.a)(Object(a.a)(r))),r.cache={},r}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[m.a.createElement(j,{key:"cb",value:t.text})].concat(Object(o.a)(t.log.map(function(e,t){return m.a.createElement(N,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var a=this;if(this.cache.examples)return this.cache.examples;var e=this.props.examples;if(!e)return m.a.createElement("div",null);var t=Object(b.a)("示例","Example"),n="heading-".concat(Object(f.b)());return this.appendHeading({id:n,level:2,children:[t]}),this.cache.examples=[m.a.createElement("h2",{key:"h",id:n},t)].concat(Object(o.a)(e.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),o=e.title.split("\n"),i=Object(r.a)(o,1)[0];return a.appendHeading({id:n,level:3,children:[i]}),m.a.createElement(H,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),this.cache.examples}},{key:"renderExample",value:function(t){var e="example-".concat(t);if(!this.cache[e]){var n=(this.props.examples||[]).find(function(e){return e.name===t});this.cache[e]=n?m.a.createElement(H,n):null}return this.cache[e]}},{key:"render",value:function(){var i=this,e=this.props.source;return this.headings=[],m.a.createElement(p.a,{className:Object(g.e)("_"),source:e,renderers:{code:j,heading:this.renderHeading,html:function(e){var t=e.value;if("<example />"===t)return i.renderExamples();var n=t.match(A);if(n)return i.renderExample(n[1],0<=t.indexOf("noExpand"));if("<br>"===t||"<br />"===t)return m.a.createElement("br",null);var o=t.match(P);return o?i.renderCode(o[1]):null},link:function(e){var t=e.href,n=e.children,o=t.indexOf(!1)?"_blank":void 0;return m.a.createElement("a",{href:t,target:o},n)}}})}}]),t}(h.PureComponent);L.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var F=n(46),B=n(121);n.d(t,"a",function(){return M});var D,I=((D=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={source:t.props.source},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.loader&&this.props.loader().then(function(e){t.setState({source:e.default})})}},{key:"render",value:function(){var e=this.state.source;return e?m.a.createElement(L,Object.assign({},this.props,{source:e})):m.a.createElement(F.a,{style:{minHeight:200}})}}]),n}(h.PureComponent)).defaultProps={loader:void 0,source:void 0},D);t.b=I;function M(t){return Object(B.a)(function(e){return m.a.createElement(I,Object.assign({},e,{loader:t}))})}},130:function(e,t,n){"use strict";var o=n(117);t.a=Object(o.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},134:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var o=n(145),i=n(36),a={},r=null,c=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>l){var n=Object(i.b)();return a[n]=e,n}return e.render(),null}function u(e){e&&delete a[e]}document.addEventListener("scroll",function(){r&&clearTimeout(r),r=setTimeout(function(){c||(c=!0,Object.keys(a).forEach(function(e){var t=a[e],n=t.element,o=t.render,i=n.getBoundingClientRect();i.bottom<0||i.top>l||(delete a[e],o())}),c=!1),r=null},80)},o.a)},146:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var o=n(0),i=n.n(o),a=n(39),r=n.n(a)()(),c=r.Consumer,l=r.Provider,s=function(n){return function(t){return i.a.createElement(c,null,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return i.a.createElement(n,Object.assign({},t,{scrollElement:e.element,scrollLeft:e.left,scrollTop:e.top}))})}}},257:function(e,t,n){"use strict";var o=n(5),i=n(6),s=n(8),u=n(2),d=n(7),p=n(3),h=n(0),m=n.n(h),f=n(146),g=n(36);t.a=function(e){var a=e.show,r=e.hide,c=e.move,l=e.isCurrent,t=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleShow=t.handleShow.bind(Object(p.a)(Object(p.a)(t))),t.tryHide=t.tryHide.bind(Object(p.a)(Object(p.a)(t))),t.elementRef=t.elementRef.bind(Object(p.a)(Object(p.a)(t))),t.id=Object(g.b)(),t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(c&&l(this.id)){var t=this.props,n=t.scrollLeft,o=t.scrollTop;if(e.scrollLeft!==n||e.scrollTop!==o){var i=this.getPosition(),a=i.left,r=i.top;c(this.id,a,r),this.tryHide()}}}},{key:"componentWillUnmount",value:function(){r()}},{key:"getElement",value:function(){return this.placeholderElement.nextSibling}},{key:"getPosition",value:function(){var e,t,n=this.props.position,o=this.getElement().getBoundingClientRect(),i=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;switch(n){case"top-left":e=a+o.left,t=i+o.top;break;case"top":e=a+o.left+o.width/2,t=i+o.top;break;case"top-right":e=a+o.left+o.width,t=i+o.top;break;case"left-top":e=a+o.left,t=i+o.top;break;case"left":e=a+o.left,t=i+o.top+o.height/2;break;case"left-bottom":e=a+o.left,t=i+o.bottom;break;case"right-top":e=a+o.left+o.width,t=i+o.top;break;case"right":e=a+o.left+o.width,t=i+o.top+o.height/2;break;case"right-bottom":e=a+o.left+o.width,t=i+o.bottom;break;case"bottom-left":e=a+o.left,t=i+o.top+o.height;break;case"bottom":e=a+o.left+o.width/2,t=i+o.top+o.height;break;case"bottom-right":e=a+o.left+o.width,t=i+o.top+o.height}return{left:e,top:t}}},{key:"elementRef",value:function(e){this.placeholderElement=e}},{key:"tryHide",value:function(){var e=this.props.scrollElement,t=this.getElement().getBoundingClientRect(),n=e?e.getBoundingClientRect():{};(t.bottom<n.top||t.top>n.bottom||t.right<n.left||t.left>n.right)&&r(0)}},{key:"handleShow",value:function(){var i=this;this.showTimer&&clearTimeout(this.showTimer),this.showTimer=setTimeout(function(){var e=i.getPosition(),t=e.left,n=e.top,o=Object.assign({},i.props,{style:{left:"".concat(t,"px"),top:"".concat(n,"px")}});a(o,i.id,i.props.style)},this.props.delay)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.trigger;if(!Object(h.isValidElement)(n))return console.error(new Error("Tooltip children expect a single ReactElement.")),null;var i={key:"el"};return"hover"===o?(i.onMouseEnter=this.handleShow,i.onMouseLeave=r):i.onClick=function(){setTimeout(e.handleShow,10)},[m.a.createElement("noscript",{ref:this.elementRef,key:"ns"}),Object(h.cloneElement)(n,i)]}}]),n}(h.PureComponent);return t.defaultProps={delay:0,position:"top",trigger:"hover"},Object(f.b)(t)}}}]);