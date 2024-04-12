(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{34710:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stack",function(){return e(10565)}])},44556:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(85893),a=e(84135);function o(n){var t=n.operation,e=n.languages;return(0,r.jsxs)(a.p.Tabs,{defaultValue:e[0].langKey,children:[(0,r.jsx)(a.p.TabsList,{children:e.map((function(n,t){var e=n.langLabel,o=n.langKey;return(0,r.jsx)(a.p.Tab,{value:o,children:e},"tab-".concat(e,"-").concat(t))}))}),e.map((function(n,e){var o=n.langLabel,s=n.langKey,i=n.operations;return(0,r.jsx)(a.p.Panel,{language:s,value:s,children:i[t]},"panel-".concat(o,"-").concat(e))}))]})}},76764:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var r=e(85893),a=e(20050),o=e(82623);function s(n){var t=n.code,e=n.dataStructure,s=n.raw;return(0,r.jsxs)(a.r,{breakpoints:[{0:256}],children:[(0,r.jsx)(a.r.Col,{span:6,children:e?(0,r.jsx)(o.X,{p:"lg",children:e}):""}),(0,r.jsx)(a.r.Col,{span:6,children:s?(0,r.jsx)(o.X,{p:"lg",style:{height:"100%"},children:s}):""}),(0,r.jsx)(a.r.Col,{span:12,children:t?(0,r.jsx)(o.X,{p:"lg",children:t}):""})]})}},66848:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(85893),a=e(19236),o=e(9094),s=e(67084);function i(n){var t=n.stack;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.D,{order:2,children:"Raw representation"}),(0,r.jsx)(o.M,{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,r.jsxs)(s.E,{children:["[",t.map((function(n,t){return 0===t?n:", ".concat(n)})),"]"]})})]})}},10565:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return I}});var r=e(85893),a=e(67294),o=e(76764),s=[{langLabel:"C",langKey:"c",operations:{code:'#include <limits.h>\n#include <stdio.h>\n#include <stdlib.h>\n\n// A structure to represent a stack\nstruct Stack {\n  int top;\n  unsigned capacity;\n  int* array;\n};\n\n// function to create a stack of given capacity. It initializes size of\n// stack as 0\nstruct Stack* createStack(unsigned capacity)\n{\n  struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));\n  stack->capacity = capacity;\n  stack->top = -1;\n  stack->array = (int*)malloc(stack->capacity * sizeof(int));\n  return stack;\n}\n\n// Function to add an item to stack.  It increases top by 1\nvoid push(struct Stack* stack, int item)\n{\n  if (isFull(stack))\n      return;\n  stack->array[++stack->top] = item;\n  printf("%d pushed to stack\n", item);\n}\n\n// Function to remove an item from stack.  It decreases top by 1\nint pop(struct Stack* stack)\n{\n  if (isEmpty(stack))\n      return INT_MIN;\n  return stack->array[stack->top--];\n}\n\n// Function to remove all items from stack.  Top becomes -1\nint empty(struct Stack* stack)\n{\n  stack->top = -1;\n  return stack->array = (int*) malloc(capacity * sizeof(int));\n}',push:'// Function to add an item to stack.  It increases top by 1\nvoid push(struct Stack* stack, int item)\n{\n  if (isFull(stack))\n      return;\n  stack->array[++stack->top] = item;\n  printf("%d pushed to stack\n", item);\n}',pop:"// Function to remove an item from stack.  It decreases top by 1\nint pop(struct Stack* stack)\n{\n  if (isEmpty(stack))\n      return INT_MIN;\n  return stack->array[stack->top--];\n}",empty:"// Function to remove all items from stack.  Top becomes -1\nint empty(struct Stack* stack)\n{\n  stack->top = -1;\n  return stack->array = (int*) malloc(capacity * sizeof(int));\n}"}},{langLabel:"C++",langKey:"cpp",operations:{code:'#include <bits/stdc++.h> \nusing namespace std; \n#define MAX 1000\n \nclass Stack {\n    int top;\n \npublic:\n    int a[MAX]; // Maximum size of Stack\n \n    Stack() { top = -1; }\n    bool push(int x);\n    int pop();\n    bool empty();\n};\n \nbool Stack::push(int x)\n{\n    if (top >= (MAX - 1)) {\n        cout << "Stack Overflow";\n        return false;\n    }\n    else {\n        a[++top] = x;\n        cout << x << " pushed into stack\n";\n        return true;\n    }\n}\n \nint Stack::pop()\n{\n    if (top < 0) {\n        cout << "Stack Underflow";\n        return 0;\n    }\n    else {\n        int x = a[top--];\n        return x;\n    }\n}\n\nvoid Stack::empty(){\n  top = -1;\n}',push:'bool Stack::push(int x)\n{\n    if (top >= (MAX - 1)) {\n        cout << "Stack Overflow";\n        return false;\n    }\n    else {\n        a[++top] = x;\n        cout << x << " pushed into stack\n";\n        return true;\n    }\n}',pop:'int Stack::pop()\n{\n    if (top < 0) {\n        cout << "Stack Underflow";\n        return 0;\n    }\n    else {\n        int x = a[top--];\n        return x;\n    }\n}',empty:"void Stack::empty(){\n  top = -1;\n}"}},{langLabel:"Javascript",langKey:"javascript",operations:{code:"class Stack {\n  /**\n   * Constructor: Creates an instance of a stack.\n   *\n   * @param {array} array Instance of an array object to be mutated.\n   */\n  constructor(array) {\n    this.array = [];\n    if (array) {\n      this.array = array;\n    }\n  }\n\n  /**\n   * Function add an element to the top of the stack.\n   *\n   * @param {any} value Value of the element to be pushed into the stack.\n   */\n  push(value) {\n    this.array.push(value);\n  }\n\n  /**\n   * Function removing the top element in the stack.\n   *\n   * @returns The popped element.\n   */\n  pop() {\n    return this.array.pop();\n  }\n\n  /**\n   * Function for remove all the elements in the stack.\n   */\n  clear() {\n    this.array = [];\n  }\n}\n      ",push:"/**\n  * Function add an element to the top of the stack.\n  *\n  * @param {any} value Value of the element to be pushed into the stack.\n  */\npush(value) {\n  this.array.push(value);\n}\n  ",pop:"/**\n  * Function removing the top element in the stack.\n  *\n  * @returns The popped element.\n  */\npop() {\n  return this.array.pop();\n}\n  ",empty:"/**\n  * Function for remove all the elements in the stack.\n  */\nempty() {\n  this.array = [];\n}\n  "}},{langLabel:"Python 3",langKey:"python",operations:{code:'# Used to return -infinite when stack is empty\nfrom sys import maxsize\n \n# Function to create a stack. It initializes size of stack as 0\ndef createStack():\n    stack = []\n    return stack\n \n# Function to add an item to stack. It increases size by 1\ndef push(stack, item):\n    stack.append(item)\n    print(item + " pushed to stack ")\n     \n# Function to remove an item from stack. It decreases size by 1\ndef pop(stack):\n    if (isEmpty(stack)):\n        return str(-maxsize -1) # return minus infinite\n     \n    return stack.pop()\n    \n# Reset stack to 0\ndef empty(stack):\n    stack = []\n    return stack',push:'# Function to add an item to stack. It increases size by 1\ndef push(stack, item):\n    stack.append(item)\n    print(item + " pushed to stack ")',pop:"# Function to remove an item from stack. It decreases size by 1\ndef pop(stack):\n    if (isEmpty(stack)):\n        return str(-maxsize -1) # return minus infinite\n     \n    return stack.pop()",empty:"# Reset stack to 0\ndef empty(stack):\n    stack = []\n    return stack"}},{langLabel:"Java",langKey:"java",operations:{code:'class Stack {\n    static final int MAX = 1000;\n    int top;\n    int a[] = new int[MAX]; // Maximum size of Stack\n \n    boolean isEmpty()\n    {\n        return (top < 0);\n    }\n    Stack()\n    {\n        top = -1;\n    }\n \n    boolean push(int x)\n    {\n        if (top >= (MAX - 1)) {\n            System.out.println("Stack Overflow");\n            return false;\n        }\n        else {\n            a[++top] = x;\n            System.out.println(x + " pushed into stack");\n            return true;\n        }\n    }\n \n    int pop()\n    {\n        if (top < 0) {\n            System.out.println("Stack Underflow");\n            return 0;\n        }\n        else {\n            int x = a[top--];\n            return x;\n        }\n    }\n\n    void empty(){\n      top = -1;\n    }\n  }\n}',push:'boolean push(int x)\n{\n    if (top >= (MAX - 1)) {\n        System.out.println("Stack Overflow");\n        return false;\n    }\n    else {\n        a[++top] = x;\n        System.out.println(x + " pushed into stack");\n        return true;\n    }\n}',pop:'int pop()\n{\n    if (top < 0) {\n        System.out.println("Stack Underflow");\n        return 0;\n    }\n    else {\n        int x = a[top--];\n        return x;\n    }\n}',empty:"void empty(){\n  top = -1;\n}"}}],i=e(44556);function c(n){var t=n.operation;return(0,r.jsx)(i.Z,{operation:t,languages:s})}var u=e(66848),p=e(40705),l=e(67841),d=e(97564),f=e(95117),k=e(64761),h=e(19236),m=e(76720),y=e(54777),x=e(32295);function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function b(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,a,o=[],s=!0,i=!1;try{for(e=e.call(n);!(s=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==e.return||e.return()}finally{if(i)throw a}}return o}}(n,t)||g(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n){return function(n){if(Array.isArray(n))return v(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||g(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n,t){if(n){if("string"===typeof n)return v(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(n,t):void 0}}function j(n){var t=n.element,e=n.data,a=b((0,x.q)(),2),o=a[0],s=a[1],i=e.pos;return(0,r.jsxs)(p.J,{opened:o,position:"left",placement:"center",withArrow:!0,gutter:10,children:[(0,r.jsx)(p.J.Target,{children:(0,r.jsx)(l.z,{style:{width:256,border:"1px solid white"},radius:0,onMouseEnter:s.open,onMouseLeave:s.close,children:t})}),(0,r.jsx)(p.J.Dropdown,{children:(0,r.jsx)(d.K,{children:(0,r.jsxs)(f.x,{children:["Index ",i-1]})})})]})}function w(n){var t=n.setOperation,e=n.stack,o=n.setStack,s=(0,k.rZ)(),i=b((0,x.q)(),2),c=i[0],u=i[1],v=(0,a.useState)(""),g=v[0],w=v[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.D,{order:1,mt:-8,children:"Stack"}),(0,r.jsx)(f.x,{mb:"lg",children:"Below is a visual representation of a stack. Click on the gap between the border and the elements to see the stack options."}),(0,r.jsxs)(p.J,{opened:c,position:"right",placement:"start",withArrow:!0,gutter:10,closeOnClickOutside:!0,children:[(0,r.jsx)(p.J.Target,{children:(0,r.jsx)("div",{style:{padding:"2rem",border:"1px solid ".concat(s.colors.blue[9]),width:320},onMouseEnter:u.open,children:(0,r.jsx)(d.K,{spacing:0,children:e&&0===e.length?(0,r.jsx)(f.x,{children:"Stack is empty"}):e.map((function(n,t){return(0,r.jsx)(j,{element:n,data:{pos:e.length-t}},"stack-element-".concat(t))}))})})}),(0,r.jsxs)(p.J.Dropdown,{children:[" ",(0,r.jsxs)(d.K,{onMouseLeave:u.close,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(m.I,{type:"number",placeholder:"Push Stack value",mb:"xs",value:g,onChange:function(n){w((function(){return Number(n.target.value)}))}}),(0,r.jsx)(l.z,{variant:"light",style:{width:"100%"},onClick:function(){var n;n=g,o((function(t){return n?[n].concat(S(t)):t})),t((function(){return"push"})),w((function(){return""}))},children:"Push"})]}),(0,r.jsx)(y.i,{}),(0,r.jsx)(l.z,{variant:"light",onClick:function(){o((function(n){return n.filter((function(n,t){return 0!==t}))})),t((function(){return"pop"}))},children:"Pop"}),(0,r.jsx)(l.z,{variant:"light",onClick:function(){o((function(){return[]})),t((function(){return"empty"}))},children:"Empty"})]})]})]})]})}function I(){var n=(0,a.useState)("code"),t=n[0],e=n[1],s=(0,a.useState)([4,9,7]),i=s[0],p=s[1];return(0,r.jsx)(o.Z,{dataStructure:(0,r.jsx)(w,{setOperation:e,stack:i,setStack:p}),code:(0,r.jsx)(c,{operation:t}),raw:(0,r.jsx)(u.Z,{stack:i})})}}},function(n){n.O(0,[922,590,774,888,179],(function(){return t=34710,n(n.s=t);var t}));var t=n.O();_N_E=t}]);