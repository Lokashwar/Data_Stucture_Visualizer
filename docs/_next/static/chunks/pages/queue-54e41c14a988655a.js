(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{83359:function(e,n,u){(window.__NEXT_P=window.__NEXT_P||[]).push(["/queue",function(){return u(81545)}])},44556:function(e,n,u){"use strict";u.d(n,{Z:function(){return i}});var t=u(85893),r=u(84135);function i(e){var n=e.operation,u=e.languages;return(0,t.jsxs)(r.p.Tabs,{defaultValue:u[0].langKey,children:[(0,t.jsx)(r.p.TabsList,{children:u.map((function(e,n){var u=e.langLabel,i=e.langKey;return(0,t.jsx)(r.p.Tab,{value:i,children:u},"tab-".concat(u,"-").concat(n))}))}),u.map((function(e,u){var i=e.langLabel,a=e.langKey,o=e.operations;return(0,t.jsx)(r.p.Panel,{language:a,value:a,children:o[n]},"panel-".concat(i,"-").concat(u))}))]})}},76764:function(e,n,u){"use strict";u.d(n,{Z:function(){return a}});var t=u(85893),r=u(20050),i=u(82623);function a(e){var n=e.code,u=e.dataStructure,a=e.raw;return(0,t.jsxs)(r.r,{breakpoints:[{0:256}],children:[(0,t.jsx)(r.r.Col,{span:6,children:u?(0,t.jsx)(i.X,{p:"lg",children:u}):""}),(0,t.jsx)(r.r.Col,{span:6,children:a?(0,t.jsx)(i.X,{p:"lg",style:{height:"100%"},children:a}):""}),(0,t.jsx)(r.r.Col,{span:12,children:n?(0,t.jsx)(i.X,{p:"lg",children:n}):""})]})}},66848:function(e,n,u){"use strict";u.d(n,{Z:function(){return o}});var t=u(85893),r=u(19236),i=u(9094),a=u(67084);function o(e){var n=e.stack;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.D,{order:2,children:"Raw representation"}),(0,t.jsx)(i.M,{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,t.jsxs)(a.E,{children:["[",n.map((function(e,n){return 0===n?e:", ".concat(e)})),"]"]})})]})}},81545:function(e,n,u){"use strict";u.r(n),u.d(n,{default:function(){return z}});var t=u(85893),r=u(67294),i=u(44556),a=u(76764),o=u(40705),s=u(67841),c=u(97564),l=u(95117),d=u(64761),q=u(19236),f=u(76720),p=u(54777),h=u(32295);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var u=0,t=new Array(n);u<n;u++)t[u]=e[u];return t}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var u=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=u){var t,r,i=[],a=!0,o=!1;try{for(u=u.call(e);!(a=(t=u.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==u.return||u.return()}finally{if(o)throw r}}return i}}(e,n)||g(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){if(e){if("string"===typeof e)return m(e,n);var u=Object.prototype.toString.call(e).slice(8,-1);return"Object"===u&&e.constructor&&(u=e.constructor.name),"Map"===u||"Set"===u?Array.from(u):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?m(e,n):void 0}}function j(e){var n=e.element,u=e.data,r=y((0,h.q)(),2),i=r[0],a=r[1],d=u.pos;return(0,t.jsxs)(o.J,{opened:i,position:"top",placement:"center",withArrow:!0,gutter:10,children:[(0,t.jsx)(o.J.Target,{children:(0,t.jsx)(s.z,{style:{border:"1px solid white"},m:2,onMouseEnter:a.open,onMouseLeave:a.close,children:n})}),(0,t.jsx)(o.J.Dropdown,{children:(0,t.jsx)(c.K,{children:(0,t.jsxs)(l.x,{children:["Index ",d]})})})]})}function v(e){var n=e.queue,u=e.setQueue,i=e.setOperation,a=(0,d.rZ)(),m=y((0,h.q)(),2),g=m[0],v=m[1],b=(0,r.useState)(""),w=b[0],z=b[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q.D,{order:1,mt:-8,children:"Queue"}),(0,t.jsx)(l.x,{mb:"lg",children:"Below is a visual representation of a queue. Click on the gap between the border and the elements to see the queue options."}),(0,t.jsxs)(o.J,{opened:g,position:"right",placement:"start",withArrow:!0,gutter:10,closeOnClickOutside:!0,children:[(0,t.jsx)(o.J.Target,{children:(0,t.jsx)("div",{style:{padding:"2rem",border:"1px solid ".concat(a.colors.blue[9]),display:"inline-block"},onMouseEnter:v.open,children:(0,t.jsx)("div",{children:n&&0===n.length?(0,t.jsx)(l.x,{children:"Queue is empty"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{padding:"4px"},children:"Start"}),n.map((function(e,n){return(0,t.jsx)(j,{element:e,data:{pos:n}},"queue-element-".concat(n))})),(0,t.jsx)("span",{style:{padding:"4px"},children:"End"})]})})})}),(0,t.jsx)(o.J.Dropdown,{children:(0,t.jsxs)(c.K,{onMouseLeave:v.close,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(f.I,{type:"number",placeholder:"Enqueue Queue value",mb:"xs",value:w,onChange:function(e){z((function(){return Number(e.target.value)}))}}),(0,t.jsx)(s.z,{variant:"light",style:{width:"100%"},onClick:function(){var e;e=w,u((function(n){return e?x(n).concat([e]):n})),i((function(){return"enqueue"})),z((function(){return""}))},children:"Enqueue"})]}),(0,t.jsx)(p.i,{}),(0,t.jsx)(s.z,{variant:"light",onClick:function(){u((function(e){return e.filter((function(e,n){return 0!==n}))})),i((function(){return"dequeue"}))},children:"Dequeue"})]})})]})]})}var b=u(66848),w=[{langLabel:"C++",langKey:"cpp",operations:{code:'// CPP program for array\n// implementation of queue\n#include <bits/stdc++.h>\nusing namespace std;\n \n// A structure to represent a queue\nclass Queue {\npublic:\n    int front, rear, size;\n    unsigned capacity;\n    int* array;\n};\n \n// function to create a queue\n// of given capacity.\n// It initializes size of queue as 0\nQueue* createQueue(unsigned capacity)\n{\n    Queue* queue = new Queue();\n    queue->capacity = capacity;\n    queue->front = queue->size = 0;\n \n    // This is important, see the enqueue\n    queue->rear = capacity - 1;\n    queue->array = new int[queue->capacity];\n    return queue;\n}\n \n// Queue is full when size\n// becomes equal to the capacity\nint isFull(Queue* queue)\n{\n    return (queue->size == queue->capacity);\n}\n \n// Queue is empty when size is 0\nint isEmpty(Queue* queue)\n{\n    return (queue->size == 0);\n}\n \n// Function to add an item to the queue.\n// It changes rear and size\nvoid enqueue(Queue* queue, int item)\n{\n    if (isFull(queue))\n        return;\n    queue->rear = (queue->rear + 1)\n                  % queue->capacity;\n    queue->array[queue->rear] = item;\n    queue->size = queue->size + 1;\n    cout << item << " enqueued to queue\n";\n}\n \n// Function to remove an item from queue.\n// It changes front and size\nint dequeue(Queue* queue)\n{\n    if (isEmpty(queue))\n        return INT_MIN;\n    int item = queue->array[queue->front];\n    queue->front = (queue->front + 1)\n                   % queue->capacity;\n    queue->size = queue->size - 1;\n    return item;\n}\n \n// Function to get front of queue\nint front(Queue* queue)\n{\n    if (isEmpty(queue))\n        return INT_MIN;\n    return queue->array[queue->front];\n}\n \n// Function to get rear of queue\nint rear(Queue* queue)\n{\n    if (isEmpty(queue))\n        return INT_MIN;\n    return queue->array[queue->rear];\n}\n \n// Driver code\nint main()\n{\n    Queue* queue = createQueue(1000);\n \n    enqueue(queue, 10);\n    enqueue(queue, 20);\n    enqueue(queue, 30);\n    enqueue(queue, 40);\n \n    cout << dequeue(queue)\n         << " dequeued from queue\n";\n \n    cout << "Front item is "\n         << front(queue) << endl;\n    cout << "Rear item is "\n         << rear(queue) << endl;\n \n    return 0;\n}',enqueue:'// Function to add an item to the queue.\n// It changes rear and size\nvoid enqueue(Queue* queue, int item)\n{\n    if (isFull(queue))\n        return;\n    queue->rear = (queue->rear + 1)\n                  % queue->capacity;\n    queue->array[queue->rear] = item;\n    queue->size = queue->size + 1;\n    cout << item << " enqueued to queue\n";\n}',dequeue:"// Function to remove an item from queue.\n// It changes front and size\nint dequeue(Queue* queue)\n{\n    if (isEmpty(queue))\n        return INT_MIN;\n    int item = queue->array[queue->front];\n    queue->front = (queue->front + 1)\n                   % queue->capacity;\n    queue->size = queue->size - 1;\n    return item;\n}"}}];function z(){var e=(0,r.useState)("code"),n=e[0],u=e[1],o=(0,r.useState)([4,9,7]),s=o[0],c=o[1];return(0,t.jsx)(a.Z,{dataStructure:(0,t.jsx)(v,{queue:s,setQueue:c,setOperation:u}),raw:(0,t.jsx)(b.Z,{stack:s}),code:(0,t.jsx)(i.Z,{operation:n,languages:w})})}}},function(e){e.O(0,[922,590,774,888,179],(function(){return n=83359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);