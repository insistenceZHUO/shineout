(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[33],{128:function(e,t,n){"use strict";var f=n(20),a=n(5),o=n(6),r=n(8),i=n(2),l=n(7),u=n(3),c=n(0),b=n.n(c),s=n(11),m=n.n(s),d=n(27),h=n(37),v=n(9);t.a=Object(h.b)(function(h,p){var e,t;return t=e=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).state={focus:e.autoFocus},t.handleBlur=t.handleBlur.bind(Object(u.a)(Object(u.a)(t))),t.handleFocus=t.handleFocus.bind(Object(u.a)(Object(u.a)(t))),t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var t=this.props.onBlur;t&&t(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var t=this.props.onFocus;t&&t(e)}},{key:"renderHelp",value:function(e){var t=this.props,n=t.error,a=t.tip,o=t.popover,r=["tip",o||"bottom-left"];return n&&o?(r.push("error"),b.a.createElement("div",{className:v.n.apply(void 0,r)},n.message)):a&&e?b.a.createElement("div",{className:Object(v.n)([].concat(r))},a):null}},{key:"render",value:function(){var e=this.props,t=(e.className,e.border),n=e.size,a=(e.tip,e.popover),o=e.width,r=e.style,i=e.error,l=Object(f.a)(e,["className","border","size","tip","popover","width","style","error"]),u=this.state.focus,c=h.tag||"label",s=Object.assign({width:o},r),d=m()(Object(v.n)("_",u&&"focus",!0===l.disabled&&"disabled",h.isGroup&&"group",n,s.width&&"inline",!t&&"no-border",h.overflow&&"overflow-".concat(h.overflow),i&&"invalid",a&&i&&"focus"),Object(v.c)(h.isGroup&&"group"),"function"==typeof h.className?h.className(this.props):h.className,this.props.className);return b.a.createElement(c,{className:d,style:s},b.a.createElement(p,Object.assign({},l,{size:n,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(u))}}]),n}(d.a),e.defaultProps={border:!0,style:{}},t})},133:function(e,t,n){"use strict";var a=n(37),o=n(126),r=n(128),i=n(138),l=n(139),u=n(20),c=n(5),s=n(6),d=n(8),h=n(2),p=n(7),f=n(3),b=n(0),m=n.n(b),v=n(140),g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).handleChange=t.handleChange.bind(Object(f.a)(Object(f.a)(t))),t.handleKeyUp=t.handleKeyUp.bind(Object(f.a)(Object(f.a)(t))),t.handleBlur=t.handleBlur.bind(Object(f.a)(Object(f.a)(t))),t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"invalidNumber",value:function(e){var t=this.props,n=t.digits;if("number"!==t.type)return!1;var a="^-?\\d*";return void 0===n?a+="\\.?\\d*":0<n&&(a+="\\.?\\d{0,".concat(n,"}")),a+="$",!(a=new RegExp(a)).test(e)}},{key:"handleChange",value:function(e){var t=e.target.value;this.invalidNumber(t)||this.props.onChange(t)}},{key:"handleKeyUp",value:function(e){var t=this.props,n=t.onKeyUp,a=t.onEnterPress;13===e.keyCode&&a&&a(e.target.value),n&&n(e)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,o=n.onBlur;o&&o(e),this.invalidNumber(t)||a&&a(t)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.value,a=(e.defaultValue,e.digits,e.className),o=e.htmlName,r=(e.forceChange,e.onEnterPress,Object(u.a)(e,["type","value","defaultValue","digits","className","htmlName","forceChange","onEnterPress"]));return m.a.createElement("input",Object.assign({},Object(v.a)(r),{className:a,name:r.name||o,type:"password"===t?t:"text",value:n,onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur}))}}]),n}(b.PureComponent);g.defaultProps={type:"text",value:""};var y=g,O=n(123),j=n(9),k=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(f.a)(Object(f.a)(t))),t.handleChange=t.handleChange.bind(Object(f.a)(Object(f.a)(t))),t.handleAddClick=t.handleCalc.bind(Object(f.a)(Object(f.a)(t)),e.step),t.handleSubClick=t.handleCalc.bind(Object(f.a)(Object(f.a)(t)),-e.step),t.handleMouseUp=t.handleMouseUp.bind(Object(f.a)(Object(f.a)(t))),t.handleKeyDown=t.handleKeyDown.bind(Object(f.a)(Object(f.a)(t))),t.handleKeyUp=t.handleKeyUp.bind(Object(f.a)(Object(f.a)(t))),t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleChange",value:function(e,t){if(t){var n=this.props.step.toString(),a=n.lastIndexOf(".");0<=a&&(e=parseFloat(e.toFixed(n.length-a)));var o=this.props,r=o.min,i=o.max;void 0!==i&&i<e&&(e=i),void 0!==r&&e<r&&(e=r),e!==this.props.value&&this.props.onChange(e)}else new RegExp("^-?\\d*\\.?\\d*$").test(e)&&this.props.onChange(e)}},{key:"handleBlur",value:function(e){var t=parseFloat(e.target.value);isNaN(t)&&(t=0),this.handleChange(t,!0),this.props.onBlur(e)}},{key:"changeValue",value:function(e){if(!this.props.disabled){var t=parseFloat(this.props.value);isNaN(t)&&(t=0),this.handleChange(t+e,!0)}}},{key:"longPress",value:function(e){var t=this;this.hold&&setTimeout(function(){t.changeValue(e),t.longPress(e)},50)}},{key:"handleKeyDown",value:function(e){var t=this,n=this.props.step;if(this.hold=!0,38===e.keyCode||40===e.keyCode){e.preventDefault();var a=38===e.keyCode?n:-n;this.changeValue(a),this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut),this.keyPressTimeOut=setTimeout(function(){t.longPress(a)},600)}}},{key:"handleCalc",value:function(e){var t=this;this.hold=!0,this.changeValue(e),this.keyPressTimeOut=setTimeout(function(){t.longPress(e)},1e3)}},{key:"handleKeyUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleMouseUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,Object(u.a)(e,["onChange"]));return[m.a.createElement(y,Object.assign({key:"input"},t,{className:Object(j.n)("number"),onChange:this.handleChange,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"number"})),m.a.createElement("a",{key:"up",className:Object(j.n)("number-up"),href:"javascript:;",onMouseDown:this.handleAddClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},O.a.AngleRight),m.a.createElement("a",{key:"down",className:Object(j.n)("number-down"),href:"javascript:;",onMouseDown:this.handleSubClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},O.a.AngleRight)]}}]),n}(b.PureComponent);k.defaultProps={step:1};var C=k;var w=function(e){var t=e.children,n=(e.style,Object(u.a)(e,["children","style"]));return b.Children.toArray(t).map(function(e,t){return"string"==typeof e?m.a.createElement("span",{key:t},e):Object(b.cloneElement)(e,n)})},R=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).handleChange=t.handleChange.bind(Object(f.a)(Object(f.a)(t))),t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"handleChange",value:function(e){var t=this.props,n=t.value,a=t.point,o=[];e.split("").forEach(function(e,t){o.push(e===a?n[t]:e)}),this.props.onChange(o.join(""))}},{key:"render",value:function(){var e=this.props,t=e.point,n=Object(u.a)(e,["point"]),a=Array.from({length:this.props.value.length},function(){return t}).join("");return m.a.createElement(y,Object.assign({},n,{type:"text",value:a,onChange:this.handleChange}))}}]),n}(b.PureComponent);R.defaultProps={value:"",point:"•"};var x=R,E=Object(a.a)(o.a,Object(r.a)({}),Object(i.a)(400),l.a)(y);E.Group=Object(r.a)({tag:"div",isGroup:!0})(w),E.Number=Object(a.a)(o.a,Object(r.a)({}))(C),E.Password=Object(a.a)(o.a,Object(r.a)({}))(x),E.displayName="ShineoutInput",E.Group.displayName="ShineoutInputGroup";t.a=E},136:function(e,t,n){"use strict";var a=n(13),o=n(5),r=n(6),i=n(8),l=n(2),c=n(7),s=n(3),u=n(0),d=n.n(u),h=n(11),p=n.n(h),f=n(27),b=n(15),m=n(36),v=n(133),g=n(9);t.a=function(u){var e=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={checked:e.checked},t.id="cb_".concat(Object(m.b)()),t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.handleInputChange=t.handleInputChange.bind(Object(s.a)(Object(s.a)(t))),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.checked,a=t.inputable,o=t.value,r=t.htmlValue;e.value!==o&&void 0===n&&this.setState({checked:a?!!o:o===r})}},{key:"getChecked",value:function(){var e=this.props,t=e.checked,n=e.value,a=e.htmlValue;return"function"==typeof t?t(a):void 0!==t?t:void 0===this.state.checked?n===a:this.state.checked}},{key:"getProp",value:function(e){return void 0!==this.props[e]?this.props[e]:this.state[e]}},{key:"handleChange",value:function(e){var t=this.props,n=t.onChange,a=t.onRawChange,o=t.index,r=t.inputable,i=e.target.checked;this.setState({checked:i});var l=r?this.props.value:this.props.htmlValue;a&&a(l,i),l=i?l:void 0,n&&n(l,i,o)}},{key:"handleInputChange",value:function(e){var t=this.props,n=t.onChange,a=t.index,o=0<e.length;n&&n(e,o,a)}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.style,a=e.children,o=e.inputable,r=this.getChecked(),i=p()(Object(g.g)("_",t&&"disabled",!0===r&&"checked","indeterminate"===r&&"indeterminate"),this.props.className),l="string"==typeof this.props.value?this.props.value:"";return d.a.createElement("label",{className:i,style:n,htmlFor:this.id},d.a.createElement("input",{id:this.id,disabled:t,type:u,onChange:this.handleChange,checked:r}),d.a.createElement("i",{className:Object(g.g)("indicator",u)}),a&&d.a.createElement("span",null,a),o&&r&&d.a.createElement(v.a,{className:Object(g.g)("text"),onChange:this.handleInputChange,value:l}))}}]),n}(f.b);return e.defaultProps=Object(a.a)({},b.a,{htmlValue:!0}),e}},138:function(e,t,n){"use strict";var o=n(20),r=n(5),i=n(6),l=n(8),u=n(2),c=n(7),s=n(3),d=n(0),h=n.n(d),a=n(37);t.a=Object(a.b)(function(e,a){var t,n;return n=t=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={value:e.value},t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.forceChange=t.forceChange.bind(Object(s.a)(Object(s.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(t){for(var n=this,e=arguments.length,a=new Array(1<e?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];var r,i=this.props.delay;0!==i?(this.setState({value:t}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var e;n.changeLocked=!1,(e=n.props).onChange.apply(e,[t].concat(a))},i)):(r=this.props).onChange.apply(r,[t].concat(a))}},{key:"forceChange",value:function(e){var t;this.setState({value:e});for(var n=arguments.length,a=new Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];(t=this.props).onChange.apply(t,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,Object(o.a)(e,["value","onChange"]));return h.a.createElement(a,Object.assign({},t,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),n}(d.PureComponent),t.defaultProps={delay:e},n})},139:function(e,t,n){"use strict";var a=n(5),o=n(6),r=n(8),i=n(2),l=n(7),u=n(3),c=n(0),s=n.n(c);t.a=function(t){return function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(u.a)(Object(u.a)(t))),t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"handleBlur",value:function(e){var t=this.props,n=t.value,a=t.trim,o=t.onBlur,r=t.onChange;if(a){var i=e.target.value.trim();n!==i&&r(i)}o&&o(e)}},{key:"render",value:function(){return s.a.createElement(t,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),n}(c.PureComponent)}},140:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(38),o=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];function r(e){return Object(a.a)(e,function(t){o.forEach(function(e){return delete t[e]})})}},143:function(e,t,n){"use strict";var a=n(136);t.a=Object(a.a)("radio")},150:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(0),o=n.n(a),r=n(39),i=n.n(r)()(),l=i.Provider,u=function(n){return function(t){return o.a.createElement(i.Consumer,null,function(e){return o.a.createElement(n,Object.assign({},t,e))})}}},220:function(e,t,n){"use strict";var a=n(37),o=n(126),r=n(131),u=n(150),i=n(5),l=n(6),c=n(8),s=n(2),d=n(18),h=n(7),p=n(3),f=n(0),b=n.n(f),m=n(11),v=n.n(m),g=n(27),y=n(36),O=n(120),j=n(9),k=n(143),C=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(c.a)(this,Object(s.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(p.a)(Object(p.a)(t))),t.handleUpdate=t.forceUpdate.bind(Object(p.a)(Object(p.a)(t))),t.handleRawChange=t.handleRawChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){Object(d.a)(Object(s.a)(n.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(O.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(d.a)(Object(s.a)(n.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(O.a,this.handleUpdate)}},{key:"getContent",value:function(e){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e):""}},{key:"handleClick",value:function(e,t,n){var a=this.props,o=a.data;a.datum.set(o[n])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var n=this,e=this.props,t=e.block,a=e.data,o=e.datum,r=e.keygen,i=e.children,l=v()(Object(j.g)("group",t&&"block"),this.props.className);return void 0===a?b.a.createElement("div",{className:l},b.a.createElement(u.a,{value:{onRawChange:this.handleRawChange,checked:o.check.bind(o)}},i)):b.a.createElement("div",{className:l},a.map(function(e,t){return b.a.createElement(k.a,{checked:o.check(e),disabled:o.disabled(e),key:Object(y.a)(e,r,t),htmlValue:t,index:t,onChange:n.handleClick},n.getContent(e))}),i)}}]),n}(g.b);C.defaultProps={renderItem:function(e){return e}};var w=C,R=Object(u.b)(k.a);R.Group=Object(a.a)(o.a,r.a.hoc({limit:1,bindProps:["disabled","format","prediction"]}))(w),R.displayName="ShineoutRadio",R.Group.displayName="ShineoutRadioGroup";t.a=R},782:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(121),i=n(127),l=n(25),u=n(783),c=n.n(u),s=n(784),d=n.n(s),h=Object(l.a)(c.a,d.a),p=[{name:"1-base",title:Object(l.a)("基本用法 \n Radio.Group 通过数据来生成一组单选框。","Base \n Radio.Group generate a group of radios from an array."),component:n(785).default,rawText:n(786)},{name:"2-group",title:Object(l.a)(" \n 将一组 Radio 放在 Radio.Group 中，以 React 组件方式调用。"," \n A series of radios group by Radio.Group."),component:n(787).default,rawText:n(788)},{name:"3-format",title:Object(l.a)("复杂数据 \n 复杂的数据可以使用 format 处理 value","Complex data \n Complex data can use format to process value."),component:n(789).default,rawText:n(790)},{name:"4-datum",title:Object(l.a)(" \n 当 format 不能满足需求时，可以使用 Datum.List 进行处理",' \n When the format does not satisfied your requirements, you can use <a href="#/components/Datum.List">Data.List</a> istead.'),component:n(791).default,rawText:n(792)},{name:"5-block",title:Object(l.a)("垂直布局 \n 默认为水平布局，设置 block 属性可以改为垂直布局","Vertical layout \n The default is horizontal layout and setting the block property can changed it to be vertical layout."),component:n(793).default,rawText:n(794)},{name:"6-disabled",title:Object(l.a)("禁用 \n 设置 disabled 为 true 时，禁用所有选项","Disabled \n Set disabled property is set to true, all the options is disabled."),component:n(795).default,rawText:n(796)},{name:"7-disabled",title:Object(l.a)(" \n disabled 为函数时，根据函数返回结果实现有条件禁用"," \n When the disabled is a function, disbale the option that the function to return true."),component:n(797).default,rawText:n(798)}];t.default=Object(r.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},783:function(e,t){e.exports="# Radio *单选框*\n\n<example />\n\n## API\n\nRadio 不能单独使用\n\n### Radio\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n\n### Radio.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | any | | 默认值，设置 value 时，会覆盖 defaultValue |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 如果 format 和 prediction 属性无法满足需求，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置来处理数据。 |\n| disabled | bool \\| function | false | 是否禁用 |\n| format | string \\| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | any | | 在Form中，value会被表单接管，value无效 |"},784:function(e,t){e.exports="# Radio\n\n<example />\n\n## API\n\nRadio cannot be used alone.\n\n### Radio\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | - | if not set, use (value === htmlValue). |\n| disabled | bool | false | disable checkbox |\n| htmlValue | any | true | Specifies the result |\n\n### Radio.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | any | | default value. |\n| data | array | required | the data items |\n| datum | object | - | If the format and prediction does not satisfied your requirements, you can pass in a [Datum.List](#/components/Datum.List) object or the Datum.List configuration to process data. |\n| disabled | bool \\| function | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\n| format | string \\| function | d => d | Format value<br />Default value, return original data. <br />When it is a string, it will get the value from the original data as a key .The same as (d) => d[format]<br />When it is a function, the result returned by the function will be the value. |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| name | string | none | The name of a Form that accesses data |\n| onChange | function(value) | none | value is the datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function used to determine whether match. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| value | any | | In the Form, value is taken over by the Form and the value will be invalid. |"},785:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=["red","orange","yellow","green","cyan","blue","violet"];function l(e){var t={borderBottom:"solid 1px ".concat(e),paddingBottom:2};return o.a.createElement("span",{style:t},e)}t.default=function(){return o.a.createElement(r.a.Group,{keygen:!0,data:i,defaultValue:"blue",renderItem:l})}},786:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Radio.Group 通过数据来生成一组单选框。\n * en - Base\n *    -- Radio.Group generate a group of radios from an array.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function() {\n  return <Radio.Group keygen data={data} defaultValue=\"blue\" renderItem={renderItem} />\n}\n"},787:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return o.a.createElement(r.a.Group,{keygen:!0,defaultValue:"yellow"},i.map(function(e){return o.a.createElement(r.a,{key:e,htmlValue:e},e)}))}},788:function(e,t){e.exports="/**\n * cn -\n *    -- 将一组 Radio 放在 Radio.Group 中，以 React 组件方式调用。\n * en -\n *    -- A series of radios group by Radio.Group.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <Radio.Group keygen defaultValue=\"yellow\">\n      {data.map(d => (\n        <Radio key={d} htmlValue={d}>\n          {d}\n        </Radio>\n      ))}\n    </Radio.Group>\n  )\n}\n"},789:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];t.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",data:i,format:"color",defaultValue:"blue",renderItem:"color"})}},790:function(e,t){e.exports="/**\n * cn - 复杂数据\n *    -- 复杂的数据可以使用 format 处理 value\n * en - Complex data\n *    -- Complex data can use format to process value.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return <Radio.Group keygen=\"id\" data={data} format=\"color\" defaultValue=\"blue\" renderItem=\"color\" />\n}\n"},791:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(5),o=n(6),r=n(8),i=n(2),l=n(7),u=n(0),c=n.n(u),s=n(131),d=n(220),h=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],p=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).datum=new s.a.List({format:"color",prdiction:function(e,t){return e===t.color}}),t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(d.a.Group,{keygen:"id",data:h,datum:this.datum,defaultValue:"cyan",renderItem:"color"})}}]),n}(u.Component)},792:function(e,t){e.exports="/**\n * cn -\n *    -- 当 format 不能满足需求时，可以使用 Datum.List 进行处理\n * en -\n *    -- When the format does not satisfied your requirements, you can use <a href=\"#/components/Datum.List\">Data.List</a> istead.\n */\nimport React, { Component } from 'react'\nimport { Radio, Datum } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.datum = new Datum.List({\n      format: 'color',\n      prdiction: (v, d) => v === d.color,\n    })\n  }\n\n  render() {\n    return <Radio.Group keygen=\"id\" data={data} datum={this.datum} defaultValue=\"cyan\" renderItem=\"color\" />\n  }\n}\n"},793:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];t.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",block:!0,data:i,datum:{format:"id"},defaultValue:3,renderItem:"color"})}},794:function(e,t){e.exports="/**\n * cn - 垂直布局\n *    -- 默认为水平布局，设置 block 属性可以改为垂直布局\n * en - Vertical layout\n *    -- The default is horizontal layout and setting the block property can changed it to be vertical layout.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return <Radio.Group keygen=\"id\" block data={data} datum={{ format: 'id' }} defaultValue={3} renderItem=\"color\" />\n}\n"},795:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{keygen:!0,disabled:!0,data:i,defaultValue:"blue",renderItem:function(e){return e}}))}},796:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 为 true 时，禁用所有选项\n * en - Disabled\n *    -- Set disabled property is set to true, all the options is disabled.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Radio.Group keygen disabled data={data} defaultValue=\"blue\" renderItem={d => d} />\n    </div>\n  )\n}\n"},797:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(220),i=["red","orange","yellow","green","cyan","blue","violet"];t.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{keygen:!0,data:i,disabled:function(e){return"yellow"===e},defaultValue:"blue",renderItem:function(e){return e}}))}},798:function(e,t){e.exports="/**\n * cn -\n *    -- disabled 为函数时，根据函数返回结果实现有条件禁用\n * en -\n *    -- When the disabled is a function, disbale the option that the function to return true.\n */\nimport React from 'react'\nimport { Radio } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Radio.Group keygen data={data} disabled={d => d === 'yellow'} defaultValue=\"blue\" renderItem={d => d} />\n    </div>\n  )\n}\n"}}]);