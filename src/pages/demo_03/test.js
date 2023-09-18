'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/es/empty/style');
var _empty = _interopRequireDefault(require('antd/es/empty'));
require('antd/es/message/style');
var _message2 = _interopRequireDefault(require('antd/es/message'));
require('antd/es/input/style');
var _input = _interopRequireDefault(require('antd/es/input'));
require('antd/es/tree/style');
var _tree = _interopRequireDefault(require('antd/es/tree'));
var _react = _interopRequireWildcard(require('react'));
var _lodash = require('lodash');
var _pubsubJs = _interopRequireDefault(require('pubsub-js'));
var _utils = require('./utils');
require('./index.css');
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
var TreeNode = _tree.default.TreeNode;
var Search = _input.default.Search;
var SearchTreeModal = /*#__PURE__*/ (function (_Component) {
  _inherits(SearchTreeModal, _Component);
  var _super = _createSuper(SearchTreeModal);
  function SearchTreeModal(props) {
    var _this;
    _classCallCheck(this, SearchTreeModal);
    _this = _super.call(this, props);
    _this.arrayTreeFilter = function (data, predicate, filterText) {
      var nodes = data;
      // 如果已经没有节点了，结束递归
      if (!(nodes && nodes.length)) {
        return;
      }
      var newChildren = [];
      var _iterator = _createForOfIteratorHelper(nodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var node = _step.value;
          if (predicate(node, filterText)) {
            newChildren.push(node);
            node.children = _this.arrayTreeFilter(
              node.children,
              predicate,
              filterText,
            );
          } else {
            var subs = _this.arrayTreeFilter(
              node.children,
              predicate,
              filterText,
            );
            if ((subs && subs.length) || predicate(node, filterText)) {
              node.children = subs;
              newChildren.push(node);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return newChildren;
    };
    _this.filterFn = function (data, filterText) {
      //过滤函数
      if (!filterText) {
        return true;
      }
      return new RegExp(filterText, 'i').test(data.title);
    };
    _this.onSelect = function (nowSelectedKeys, node) {
      var onSelect = _this.props.onSelect;
      var selectSiteCode = nowSelectedKeys[0];
      onSelect && onSelect(selectSiteCode, node.node.nodeInfo);
    };
    _this.onChange = function (e) {
      var _this$state = _this.state,
        copyTree = _this$state.copyTree,
        copyExpandedKeys = _this$state.copyExpandedKeys;
      var treeProps = _this.props.treeProps;
      var value = e.target.value;
      if ((0, _lodash.isEmpty)(treeProps)) {
        return;
      }
      if (value == '') {
        _this.setState({
          treeData: (0, _lodash.cloneDeep)(copyTree),
          expandedKeys:
            _this.props.defaultExpandedKeys ||
            (0, _lodash.cloneDeep)(copyExpandedKeys),
          autoExpandParent: true,
          searchValue: '',
        });
      } else {
        var res = _this.arrayTreeFilter(
          (0, _lodash.cloneDeep)(copyTree),
          _this.filterFn,
          value,
        );
        var expkey = (0, _utils.expandedKeysFun)(res);
        _this.setState({
          treeData: res,
          expandedKeys: expkey,
          searchValue: value,
          autoExpandParent: true,
        });
      }
    };
    _this.renderTreeNode = function (data) {
      //生成树结构函数
      if (data.length == 0) {
        return;
      }
      var searchValue = _this.state.searchValue;
      return data.map(function (item) {
        var allowStrLength = item.children ? 19 : 14;
        var index = item.title.indexOf(searchValue);
        var beforeStr = item.title.substr(0, index);
        var afterStr = item.title.substr(index + searchValue.length);
        var beforetStrLength = (0, _utils.getStrLength)(beforeStr);
        var allowAfterLength = allowStrLength - beforetStrLength + 2;
        var title =
          index > -1
            ? /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  title: item.title,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _react.Fragment,
                  null,
                  beforeStr,
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      className: 'site-tree-search-value',
                    },
                    searchValue,
                  ),
                  allowAfterLength > (0, _utils.getStrLength)(afterStr)
                    ? afterStr
                    : (0, _utils.splitStrEllipsis)(afterStr, 19),
                ),
              )
            : /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  title: item.title,
                },
                (0, _utils.splitStrEllipsis)(item.title, 19),
              );
        if (item.children && item.children.length > 0) {
          return /*#__PURE__*/ _react.default.createElement(
            TreeNode,
            {
              key: item.key,
              title: title,
              icon: item.icon,
              selectable: item.selectable,
              // @ts-ignore
              nodeInfo: item,
            },
            _this.renderTreeNode(item.children),
          );
        }
        return /*#__PURE__*/ _react.default.createElement(TreeNode, {
          key: item.key,
          title: title,
          icon: item.icon,
          selectable: item.selectable,
          // @ts-ignore
          nodeInfo: item,
        });
      });
    };
    _this.onCheck = function (checkedKeys, node) {
      var _this$props$onlyOne = _this.props.onlyOne,
        onlyOne = _this$props$onlyOne === void 0 ? true : _this$props$onlyOne;
      if (
        onlyOne &&
        (checkedKeys === null || checkedKeys === void 0
          ? void 0
          : checkedKeys.length) === 0
      ) {
        _message2.default.info('至少选中一个');
        return;
      }
      var checkedNodes = node.checkedNodes;
      var onCheck = _this.props.onCheck;
      _this.setState({
        checkedKeys: checkedKeys,
      });
      _pubsubJs.default.publishSync('searchTree - selectedKeys', checkedKeys);
      onCheck && onCheck(checkedKeys, checkedNodes);
    };
    _this.onExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false,
      });
    };
    var treeData = (0, _lodash.cloneDeep)(props.treeProps);
    _this.state = {
      expandedKeys: [],
      checkedKeys: [],
      treeData: treeData,
      copyTree: [],
      copyExpandedKeys: [],
      //备份 展开key
      searchValue: '',
      autoExpandParent: false,
    };
    return _this;
  }
  _createClass(SearchTreeModal, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var a = (0, _utils.expandedKeysFun)(this.state.treeData); //展开key
        this.setState({
          expandedKeys: this.props.defaultExpandedKeys || a,
          checkedKeys: this.props.defaultCheckedKeys,
          copyTree: (0, _lodash.cloneDeep)(this.state.treeData),
          copyExpandedKeys: a,
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$state2 = this.state,
          expandedKeys = _this$state2.expandedKeys,
          checkedKeys = _this$state2.checkedKeys,
          treeData = _this$state2.treeData,
          autoExpandParent = _this$state2.autoExpandParent;
        var _this$props = this.props,
          _this$props$selectabl = _this$props.selectable,
          selectable =
            _this$props$selectabl === void 0 ? true : _this$props$selectabl,
          _this$props$checkable = _this$props.checkable,
          checkable =
            _this$props$checkable === void 0 ? false : _this$props$checkable,
          _this$props$defaultSe = _this$props.defaultSelectedKeys,
          defaultSelectedKeys =
            _this$props$defaultSe === void 0 ? [] : _this$props$defaultSe,
          _this$props$defaultCh = _this$props.defaultCheckedKeys,
          defaultCheckedKeys =
            _this$props$defaultCh === void 0 ? [] : _this$props$defaultCh,
          _this$props$defaultEx = _this$props.defaultExpandedKeys,
          defaultExpandedKeys =
            _this$props$defaultEx === void 0 ? [] : _this$props$defaultEx;
        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'search_tree_modal_wrap',
          },
          /*#__PURE__*/ _react.default.createElement(Search, {
            style: {
              width: '100%',
              marginBottom: '16px',
            },
            placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57',
            onChange: this.onChange,
          }),
          /*#__PURE__*/ _react.default.createElement(
            _tree.default,
            {
              showIcon: true,
              selectable: selectable,
              checkable: checkable,
              onSelect: this.onSelect,
              // @ts-ignore
              onCheck: this.onCheck,
              onExpand: this.onExpand,
              checkedKeys: checkedKeys,
              expandedKeys: expandedKeys,
              autoExpandParent: autoExpandParent,
              blockNode: true,
              defaultExpandedKeys: defaultExpandedKeys,
              defaultSelectedKeys: defaultSelectedKeys,
              defaultCheckedKeys: defaultCheckedKeys,
            },
            this.renderTreeNode(treeData),
          ),
          (0, _lodash.isEmpty)(treeData) &&
            /*#__PURE__*/ _react.default.createElement(_empty.default, {
              description: '\u6682\u65E0\u6570\u636E',
              style: {
                marginTop: '40px',
              },
            }),
        );
      },
    },
  ]);
  return SearchTreeModal;
})(_react.Component);
var _default = SearchTreeModal;
exports.default = _default;
