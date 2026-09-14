function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok.prototype.$tag = 1;
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function _M0TP29bridgelab9bridgelab13CandidateEdge(param0, param1) {
  this.a = param0;
  this.b = param1;
}
function _M0DTP29bridgelab9bridgelab13Contradiction14IslandCapacity(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP29bridgelab9bridgelab13Contradiction14IslandCapacity.prototype.$tag = 0;
function _M0DTP29bridgelab9bridgelab13Contradiction23PotentiallyDisconnected() {}
_M0DTP29bridgelab9bridgelab13Contradiction23PotentiallyDisconnected.prototype.$tag = 1;
const _M0DTP29bridgelab9bridgelab13Contradiction23PotentiallyDisconnected__ = new _M0DTP29bridgelab9bridgelab13Contradiction23PotentiallyDisconnected();
function _M0TP29bridgelab9bridgelab4Hint(param0, param1, param2, param3) {
  this.a = param0;
  this.b = param1;
  this.count = param2;
  this.reason = param3;
}
function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE2Ok.prototype.$tag = 1;
function _M0TP29bridgelab9bridgelab6Bridge(param0, param1, param2) {
  this.a = param0;
  this.b = param1;
  this.count = param2;
}
function _M0TP29bridgelab9bridgelab5Board(param0, param1, param2, param3) {
  this.rows = param0;
  this.cols = param1;
  this.islands = param2;
  this.bridges = param3;
}
function _M0DTP29bridgelab9bridgelab12SolveOutcome10NoSolution() {}
_M0DTP29bridgelab9bridgelab12SolveOutcome10NoSolution.prototype.$tag = 0;
const _M0DTP29bridgelab9bridgelab12SolveOutcome10NoSolution__ = new _M0DTP29bridgelab9bridgelab12SolveOutcome10NoSolution();
function _M0DTP29bridgelab9bridgelab12SolveOutcome14UniqueSolution(param0) {
  this._0 = param0;
}
_M0DTP29bridgelab9bridgelab12SolveOutcome14UniqueSolution.prototype.$tag = 1;
function _M0DTP29bridgelab9bridgelab12SolveOutcome17MultipleSolutions(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP29bridgelab9bridgelab12SolveOutcome17MultipleSolutions.prototype.$tag = 2;
function _M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached() {}
_M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached.prototype.$tag = 3;
const _M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached__ = new _M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached();
function _M0TP29bridgelab9bridgelab16PuzzleAssessment(param0, param1, param2, param3, param4) {
  this.solvable = param0;
  this.unique = param1;
  this.difficulty = param2;
  this.island_count = param3;
  this.candidate_count = param4;
}
function _M0TP29bridgelab9bridgelab6Island(param0, param1, param2) {
  this.id = param0;
  this.position = param1;
  this.target = param2;
}
function _M0TP29bridgelab9bridgelab5Point(param0, param1) {
  this.row = param0;
  this.col = param1;
}
function _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE2Ok.prototype.$tag = 1;
function _M0DTP29bridgelab9bridgelab11PuzzleError17InvalidDimensions(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP29bridgelab9bridgelab11PuzzleError17InvalidDimensions.prototype.$tag = 0;
function _M0DTP29bridgelab9bridgelab11PuzzleError17DuplicateIslandId(param0) {
  this._0 = param0;
}
_M0DTP29bridgelab9bridgelab11PuzzleError17DuplicateIslandId.prototype.$tag = 1;
function _M0DTP29bridgelab9bridgelab11PuzzleError23DuplicateIslandPosition(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP29bridgelab9bridgelab11PuzzleError23DuplicateIslandPosition.prototype.$tag = 2;
function _M0DTP29bridgelab9bridgelab11PuzzleError17IslandOutOfBounds(param0) {
  this._0 = param0;
}
_M0DTP29bridgelab9bridgelab11PuzzleError17IslandOutOfBounds.prototype.$tag = 3;
function _M0DTP29bridgelab9bridgelab11PuzzleError13InvalidTarget(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP29bridgelab9bridgelab11PuzzleError13InvalidTarget.prototype.$tag = 4;
function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE2Ok.prototype.$tag = 1;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS9808GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9809GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9808GcE = 0;
const _M0MPB4Iter4nextN6constrS9809GcE = 0;
const _M0MPB4Iter3newN6constrS9816GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS9816GcE = 0;
const _M0FP29bridgelab9bridgelab11parse__fourN7_2abindS954 = ",";
const _M0FP29bridgelab9bridgelab12parse__threeN7_2abindS970 = ",";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1075 = "|";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1004 = "BRIDGELAB";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1005 = "BRIDGELAB2";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1074 = ",";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1028 = ";";
const _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1056 = ";";
const _M0MPC16string10StringView4findN6constrS9818 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1237 = 6;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1238 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1239 = 1;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1240 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1241 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1242 = 2;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1243 = 3;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1244 = 4;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1245 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1246 = 0;
const _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1247 = 5;
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1250 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的 BridgeLab 快照头");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1251 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的棋盘尺寸");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1252 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的行数");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1253 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的列数");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1254 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的岛屿记录");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1255 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("无效的桥记录");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1256 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("快照包含重复或零桥记录");
const _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1257 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("快照包含非法桥");
const _M0MP29bridgelab9bridgelab5Board9propagateN6constrS1248 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("局面存在矛盾，无法继续传播");
const _M0MP29bridgelab9bridgelab5Board9propagateN6constrS1249 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("提示无法应用，规则引擎状态不一致");
const _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1258 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("生成尺寸必须在 3 到 64 之间");
const _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1259 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("生成尺寸无法容纳足够岛屿");
const _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1260 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("生成器产生了无效棋盘");
const _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1261 = new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err("生成器未能证明谜题唯一");
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      const _p = self.charCodeAt(start);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9809GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9808GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9809GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9808GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9816GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9816GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          $bound_check(table, _tmp$3);
          k = table[_tmp$3];
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      $bound_check(table, i);
      table[i] = k;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          $bound_check(table, _tmp$3);
          k = table[_tmp$3];
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9818;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array5Array6removeGRP29bridgelab9bridgelab6BridgeE(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    _M0MPB7JSArray6splice(self, index, 1);
    return value;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    return $panic();
  }
}
function _M0MPC15array5Array4copyGRP29bridgelab9bridgelab6BridgeE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGRP29bridgelab9bridgelab6BridgeE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array4makeGiE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0FP29bridgelab9bridgelab19bridge__error__text(error) {
  switch (error) {
    case 0: {
      return "InvalidIsland";
    }
    case 1: {
      return "SameIsland";
    }
    case 2: {
      return "NotAligned";
    }
    case 3: {
      return "NoIslandBetween";
    }
    case 4: {
      return "CrossesExisting";
    }
    case 5: {
      return "ExceedsDegree";
    }
    default: {
      return "InvalidCount";
    }
  }
}
function _M0FP29bridgelab9bridgelab15incident__count(board, id) {
  let total = 0;
  const _bind = board.bridges;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const bridge = _bind[_];
      if (bridge.a === id || bridge.b === id) {
        total = total + bridge.count | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return total;
}
function _M0FP29bridgelab9bridgelab13island__index(board, id) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < board.islands.length) {
      if (_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, i).id === id) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP29bridgelab9bridgelab10root__find(parent, value) {
  let current = value;
  while (true) {
    if (_M0MPC15array5Array2atGiE(parent, current) !== current) {
      current = _M0MPC15array5Array2atGiE(parent, current);
      continue;
    } else {
      break;
    }
  }
  return current;
}
function _M0MP29bridgelab9bridgelab5Board13is__connected(self) {
  if (self.islands.length <= 1) {
    return self.islands.length === 1;
  }
  const parent = _M0MPC15array5Array4makeGiE(self.islands.length, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < parent.length) {
      _M0MPC15array5Array3setGiE(parent, i, i);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = self.bridges;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const bridge = _bind[_];
      _L: {
        const _bind$3 = _M0FP29bridgelab9bridgelab13island__index(self, bridge.a);
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _ai = _Some;
          const _bind$4 = _M0FP29bridgelab9bridgelab13island__index(self, bridge.b);
          if (_bind$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _bind$4;
            const _bi = _Some$2;
            const root_a = _M0FP29bridgelab9bridgelab10root__find(parent, _ai);
            const root_b = _M0FP29bridgelab9bridgelab10root__find(parent, _bi);
            _M0MPC15array5Array3setGiE(parent, root_a, root_b);
          }
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const first = _M0FP29bridgelab9bridgelab10root__find(parent, 0);
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < parent.length) {
      if (_M0FP29bridgelab9bridgelab10root__find(parent, i) !== first) {
        return false;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MP29bridgelab9bridgelab5Board12is__complete(self) {
  if (self.islands.length === 0 || !_M0MP29bridgelab9bridgelab5Board13is__connected(self)) {
    return false;
  }
  const _bind = self.islands;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const island = _bind[_];
      if (_M0FP29bridgelab9bridgelab15incident__count(self, island.id) !== island.target) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP29bridgelab9bridgelab19board__status__json(board) {
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(builder, "{\"ok\":true,\"complete\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0MP29bridgelab9bridgelab5Board12is__complete(board) ? "true" : "false");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"connected\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0MP29bridgelab9bridgelab5Board13is__connected(board) ? "true" : "false");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"violations\":[]}");
  return builder.val;
}
function _M0FP29bridgelab9bridgelab14point__between(a, b, p) {
  if (a.row === b.row && p.row === a.row) {
    const _tmp = p.col;
    const _p = a.col;
    const _p$2 = b.col;
    if (_tmp > (_p < _p$2 ? _p : _p$2)) {
      const _tmp$2 = p.col;
      const _p$3 = a.col;
      const _p$4 = b.col;
      return _tmp$2 < (_p$3 > _p$4 ? _p$3 : _p$4);
    } else {
      return false;
    }
  } else {
    if (a.col === b.col && p.col === a.col) {
      const _tmp = p.row;
      const _p = a.row;
      const _p$2 = b.row;
      if (_tmp > (_p < _p$2 ? _p : _p$2)) {
        const _tmp$2 = p.row;
        const _p$3 = a.row;
        const _p$4 = b.row;
        return _tmp$2 < (_p$3 > _p$4 ? _p$3 : _p$4);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
function _M0FP29bridgelab9bridgelab13visible__pair(board, a, b) {
  if (a === b) {
    return false;
  }
  const _bind = _M0FP29bridgelab9bridgelab13island__index(board, a);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _ai = _Some;
    const _bind$2 = _M0FP29bridgelab9bridgelab13island__index(board, b);
    if (_bind$2 === undefined) {
      return false;
    } else {
      const _Some$2 = _bind$2;
      const _bi = _Some$2;
      const ap = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _ai).position;
      const bp = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _bi).position;
      if (ap.row !== bp.row && ap.col !== bp.col) {
        return false;
      }
      const _bind$3 = board.islands;
      const _bind$4 = _bind$3.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const island = _bind$3[_];
          if (island.id !== a && (island.id !== b && _M0FP29bridgelab9bridgelab14point__between(ap, bp, island.position))) {
            return false;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return true;
    }
  }
}
function _M0MP29bridgelab9bridgelab5Board16candidate__edges(self) {
  const result = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.islands.length) {
      let _tmp$2 = i + 1 | 0;
      while (true) {
        const j = _tmp$2;
        if (j < self.islands.length) {
          const a = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, i).id;
          const b = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, j).id;
          if (_M0FP29bridgelab9bridgelab13visible__pair(self, a, b)) {
            _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(result, new _M0TP29bridgelab9bridgelab13CandidateEdge(a < b ? a : b, a > b ? a : b));
          }
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP29bridgelab9bridgelab15segments__cross(a, b, c, d) {
  const first_horizontal = a.row === b.row;
  const second_horizontal = c.row === d.row;
  if (first_horizontal === second_horizontal) {
    return false;
  }
  const horizontal_a = first_horizontal ? a : c;
  const horizontal_b = first_horizontal ? b : d;
  const vertical_a = first_horizontal ? c : a;
  const vertical_b = first_horizontal ? d : b;
  const cross_row = horizontal_a.row;
  const cross_col = vertical_a.col;
  let inside_horizontal;
  const _p = horizontal_a.col;
  const _p$2 = horizontal_b.col;
  if (cross_col > (_p < _p$2 ? _p : _p$2)) {
    const _p$3 = horizontal_a.col;
    const _p$4 = horizontal_b.col;
    inside_horizontal = cross_col < (_p$3 > _p$4 ? _p$3 : _p$4);
  } else {
    inside_horizontal = false;
  }
  let inside_vertical;
  const _p$3 = vertical_a.row;
  const _p$4 = vertical_b.row;
  if (cross_row > (_p$3 < _p$4 ? _p$3 : _p$4)) {
    const _p$5 = vertical_a.row;
    const _p$6 = vertical_b.row;
    inside_vertical = cross_row < (_p$5 > _p$6 ? _p$5 : _p$6);
  } else {
    inside_vertical = false;
  }
  return inside_horizontal && inside_vertical;
}
function _M0FP29bridgelab9bridgelab12would__cross(board, a, b) {
  const _bind = _M0FP29bridgelab9bridgelab13island__index(board, a);
  if (_bind === undefined) {
    return true;
  } else {
    const _Some = _bind;
    const _ai = _Some;
    const _bind$2 = _M0FP29bridgelab9bridgelab13island__index(board, b);
    if (_bind$2 === undefined) {
      return true;
    } else {
      const _Some$2 = _bind$2;
      const _bi = _Some$2;
      const ap = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _ai).position;
      const bp = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _bi).position;
      const _bind$3 = board.bridges;
      const _bind$4 = _bind$3.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const bridge = _bind$3[_];
          _L: {
            if (bridge.a !== (a < b ? a : b) || bridge.b !== (a > b ? a : b)) {
              const _bind$5 = _M0FP29bridgelab9bridgelab13island__index(board, bridge.a);
              if (_bind$5 === undefined) {
                break _L;
              } else {
                const _Some$3 = _bind$5;
                const _ci = _Some$3;
                const _bind$6 = _M0FP29bridgelab9bridgelab13island__index(board, bridge.b);
                if (_bind$6 === undefined) {
                  break _L;
                } else {
                  const _Some$4 = _bind$6;
                  const _di = _Some$4;
                  if (_M0FP29bridgelab9bridgelab15segments__cross(ap, bp, _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _ci).position, _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _di).position)) {
                    return true;
                  }
                }
              }
            }
            break _L;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return false;
    }
  }
}
function _M0FP29bridgelab9bridgelab13bridge__index(board, a, b) {
  const low = a < b ? a : b;
  const high = a > b ? a : b;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < board.bridges.length) {
      const bridge = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.bridges, i);
      if (bridge.a === low && bridge.b === high) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0MP29bridgelab9bridgelab5Board13bridge__count(self, a, b) {
  const _bind = _M0FP29bridgelab9bridgelab13bridge__index(self, a, b);
  if (_bind === undefined) {
    return 0;
  } else {
    const _Some = _bind;
    const _index = _Some;
    return _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.bridges, _index).count;
  }
}
function _M0MP29bridgelab9bridgelab5Board12find__island(self, id) {
  const _bind = _M0FP29bridgelab9bridgelab13island__index(self, id);
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _index = _Some;
    return _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, _index);
  }
}
function _M0FP29bridgelab9bridgelab15available__edge(board, a, b) {
  if (_M0MP29bridgelab9bridgelab5Board13bridge__count(board, a, b) >= 2 || (!_M0FP29bridgelab9bridgelab13visible__pair(board, a, b) || _M0FP29bridgelab9bridgelab12would__cross(board, a, b))) {
    return false;
  }
  const _bind = _M0MP29bridgelab9bridgelab5Board12find__island(board, a);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _one = _Some;
    if (_M0FP29bridgelab9bridgelab15incident__count(board, a) >= _one.target) {
      return false;
    } else {
      const _bind$2 = _M0MP29bridgelab9bridgelab5Board12find__island(board, b);
      if (_bind$2 === undefined) {
        return false;
      } else {
        const _Some$2 = _bind$2;
        const _two = _Some$2;
        return _M0FP29bridgelab9bridgelab15incident__count(board, b) < _two.target;
      }
    }
  }
}
function _M0FP29bridgelab9bridgelab19can__still__connect(board) {
  if (board.islands.length <= 1) {
    return board.islands.length === 1;
  }
  const parent = _M0MPC15array5Array4makeGiE(board.islands.length, 0);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < parent.length) {
      _M0MPC15array5Array3setGiE(parent, i, i);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = _M0MP29bridgelab9bridgelab5Board16candidate__edges(board);
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const edge = _bind[_];
      _L: {
        const already_used = _M0MP29bridgelab9bridgelab5Board13bridge__count(board, edge.a, edge.b) > 0;
        if (already_used || _M0FP29bridgelab9bridgelab15available__edge(board, edge.a, edge.b)) {
          const _bind$3 = _M0FP29bridgelab9bridgelab13island__index(board, edge.a);
          if (_bind$3 === undefined) {
            break _L;
          } else {
            const _Some = _bind$3;
            const _ai = _Some;
            const _bind$4 = _M0FP29bridgelab9bridgelab13island__index(board, edge.b);
            if (_bind$4 === undefined) {
              break _L;
            } else {
              const _Some$2 = _bind$4;
              const _bi = _Some$2;
              const root_a = _M0FP29bridgelab9bridgelab10root__find(parent, _ai);
              const root_b = _M0FP29bridgelab9bridgelab10root__find(parent, _bi);
              _M0MPC15array5Array3setGiE(parent, root_a, root_b);
            }
          }
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const first = _M0FP29bridgelab9bridgelab10root__find(parent, 0);
  let _tmp$3 = 1;
  while (true) {
    const i = _tmp$3;
    if (i < parent.length) {
      if (_M0FP29bridgelab9bridgelab10root__find(parent, i) !== first) {
        return false;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP29bridgelab9bridgelab25edge__remaining__capacity(board, a, b) {
  if (!_M0FP29bridgelab9bridgelab15available__edge(board, a, b)) {
    return 0;
  }
  const edge_capacity = 2 - _M0MP29bridgelab9bridgelab5Board13bridge__count(board, a, b) | 0;
  const _bind = _M0MP29bridgelab9bridgelab5Board12find__island(board, b);
  if (_bind === undefined) {
    return 0;
  } else {
    const _Some = _bind;
    const _other = _Some;
    const _p = _other.target - _M0FP29bridgelab9bridgelab15incident__count(board, _other.id) | 0;
    return edge_capacity < _p ? edge_capacity : _p;
  }
}
function _M0MP29bridgelab9bridgelab5Board13neighbor__ids(self, id) {
  const result = [];
  const _bind = _M0MP29bridgelab9bridgelab5Board16candidate__edges(self);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const edge = _bind[_];
      if (edge.a === id) {
        _M0MPC15array5Array4pushGiE(result, edge.b);
      } else {
        if (edge.b === id) {
          _M0MPC15array5Array4pushGiE(result, edge.a);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0MP29bridgelab9bridgelab5Board14contradictions(self) {
  const result = [];
  const _bind = self.islands;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const island = _bind[_];
      _L: {
        const actual = _M0FP29bridgelab9bridgelab15incident__count(self, island.id);
        const remaining = island.target - actual | 0;
        if (remaining < 0) {
          _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(result, new _M0DTP29bridgelab9bridgelab13Contradiction14IslandCapacity(island.id, remaining, 0));
          break _L;
        }
        let capacity = 0;
        const _bind$3 = _M0MP29bridgelab9bridgelab5Board13neighbor__ids(self, island.id);
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const neighbour = _bind$3[_$2];
            capacity = capacity + _M0FP29bridgelab9bridgelab25edge__remaining__capacity(self, island.id, neighbour) | 0;
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (capacity < remaining) {
          _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(result, new _M0DTP29bridgelab9bridgelab13Contradiction14IslandCapacity(island.id, remaining, capacity));
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.islands.length > 0 && !_M0FP29bridgelab9bridgelab19can__still__connect(self)) {
    _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(result, _M0DTP29bridgelab9bridgelab13Contradiction23PotentiallyDisconnected__);
  }
  return result;
}
function _M0MP29bridgelab9bridgelab5Board18has__contradiction(self) {
  return _M0MP29bridgelab9bridgelab5Board14contradictions(self).length > 0;
}
function _M0FP29bridgelab9bridgelab14validate__edge(board, a, b, count) {
  if (count < 0 || count > 2) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1237;
  }
  _L: {
    _L$2: {
      const _bind = _M0FP29bridgelab9bridgelab13island__index(board, a);
      if (_bind === undefined) {
        break _L$2;
      } else {
        const _bind$2 = _M0FP29bridgelab9bridgelab13island__index(board, b);
        if (_bind$2 === undefined) {
          break _L$2;
        }
      }
      break _L;
    }
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1238;
  }
  if (a === b) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1239;
  }
  const _bind = _M0MP29bridgelab9bridgelab5Board12find__island(board, a);
  let one;
  if (_bind === undefined) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1240;
  } else {
    const _Some = _bind;
    one = _Some;
  }
  const _bind$2 = _M0MP29bridgelab9bridgelab5Board12find__island(board, b);
  let two;
  if (_bind$2 === undefined) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1241;
  } else {
    const _Some = _bind$2;
    two = _Some;
  }
  if (one.position.row !== two.position.row && one.position.col !== two.position.col) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1242;
  }
  if (!_M0FP29bridgelab9bridgelab13visible__pair(board, a, b)) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1243;
  }
  if (_M0FP29bridgelab9bridgelab12would__cross(board, a, b)) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1244;
  }
  const old = _M0MP29bridgelab9bridgelab5Board13bridge__count(board, a, b);
  const _bind$3 = _M0FP29bridgelab9bridgelab13island__index(board, a);
  if (_bind$3 === undefined) {
    return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1245;
  } else {
    const _Some = _bind$3;
    const _ai = _Some;
    const _bind$4 = _M0FP29bridgelab9bridgelab13island__index(board, b);
    if (_bind$4 === undefined) {
      return _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1246;
    } else {
      const _Some$2 = _bind$4;
      const _bi = _Some$2;
      const new_degree_a = (_M0FP29bridgelab9bridgelab15incident__count(board, a) - old | 0) + count | 0;
      const new_degree_b = (_M0FP29bridgelab9bridgelab15incident__count(board, b) - old | 0) + count | 0;
      return new_degree_a > _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _ai).target || new_degree_b > _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(board.islands, _bi).target ? _M0FP29bridgelab9bridgelab14validate__edgeN6constrS1247 : undefined;
    }
  }
}
function _M0MP29bridgelab9bridgelab5Board4hint(self) {
  const _bind = self.islands;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const island = _bind[_];
      _L: {
        const degree = _M0FP29bridgelab9bridgelab15incident__count(self, island.id);
        if (degree >= island.target) {
          break _L;
        }
        let options = 0;
        let last_id = -1;
        let total_capacity = 0;
        let last_capacity = 0;
        const _bind$3 = self.islands;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const other = _bind$3[_$2];
            if (other.id !== island.id && _M0FP29bridgelab9bridgelab15available__edge(self, island.id, other.id)) {
              options = options + 1 | 0;
              last_id = other.id;
              const edge_capacity = 2 - _M0MP29bridgelab9bridgelab5Board13bridge__count(self, island.id, other.id) | 0;
              const endpoint_capacity = other.target - _M0FP29bridgelab9bridgelab15incident__count(self, other.id) | 0;
              last_capacity = edge_capacity < endpoint_capacity ? edge_capacity : endpoint_capacity;
              total_capacity = total_capacity + last_capacity | 0;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const remaining = island.target - degree | 0;
        if (options === 1 && remaining <= last_capacity) {
          const desired = _M0MP29bridgelab9bridgelab5Board13bridge__count(self, island.id, last_id) + remaining | 0;
          const _bind$5 = _M0FP29bridgelab9bridgelab14validate__edge(self, island.id, last_id, desired);
          if (_bind$5 === undefined) {
            const _p = island.id;
            const _p$2 = last_id;
            const _tmp$3 = _p < _p$2 ? _p : _p$2;
            const _p$3 = island.id;
            const _p$4 = last_id;
            return new _M0TP29bridgelab9bridgelab4Hint(_tmp$3, _p$3 > _p$4 ? _p$3 : _p$4, desired, "[DEGREE_ONLY_EDGE] 该岛只剩一条可用边");
          }
        }
        if (options > 0 && remaining === total_capacity) {
          const desired = _M0MP29bridgelab9bridgelab5Board13bridge__count(self, island.id, last_id) + last_capacity | 0;
          const _bind$5 = _M0FP29bridgelab9bridgelab14validate__edge(self, island.id, last_id, desired);
          if (_bind$5 === undefined) {
            const _p = island.id;
            const _p$2 = last_id;
            const _tmp$3 = _p < _p$2 ? _p : _p$2;
            const _p$3 = island.id;
            const _p$4 = last_id;
            return new _M0TP29bridgelab9bridgelab4Hint(_tmp$3, _p$3 > _p$4 ? _p$3 : _p$4, desired, "[DEGREE_SATURATION] 该岛的所有候选边都必须达到最大容量");
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP29bridgelab9bridgelab13write__island(builder, island) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, island.id);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, island.position.row);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, island.position.col);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, island.target);
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _string_builder.val);
}
function _M0MP29bridgelab9bridgelab5Board9serialize(self) {
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "BRIDGELAB|");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.rows);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.cols);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "|");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _string_builder.val);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.islands.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(builder, 59);
      }
      _M0FP29bridgelab9bridgelab13write__island(builder, _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(builder, "|");
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < self.bridges.length) {
      if (i > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(builder, 59);
      }
      const bridge = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.bridges, i);
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, bridge.a);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, bridge.b);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, bridge.count);
      _M0IPB13StringBuilderPB6Logger13write__string(builder, _string_builder$2.val);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return builder.val;
}
function _M0MP29bridgelab9bridgelab5Board11set__bridge(self, a, b, count) {
  const _bind = _M0FP29bridgelab9bridgelab14validate__edge(self, a, b, count);
  if (_bind === undefined) {
    const low = a < b ? a : b;
    const high = a > b ? a : b;
    const next_bridges = _M0MPC15array5Array4copyGRP29bridgelab9bridgelab6BridgeE(self.bridges);
    const _bind$2 = _M0FP29bridgelab9bridgelab13bridge__index(self, a, b);
    if (_bind$2 === undefined) {
      if (count === 0) {
        return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE2Ok(self);
      } else {
        _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(next_bridges, new _M0TP29bridgelab9bridgelab6Bridge(low, high, count));
        return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE2Ok(new _M0TP29bridgelab9bridgelab5Board(self.rows, self.cols, self.islands, next_bridges));
      }
    } else {
      const _Some = _bind$2;
      const _index = _Some;
      if (count === 0) {
        _M0MPC15array5Array6removeGRP29bridgelab9bridgelab6BridgeE(next_bridges, _index);
      } else {
        _M0MPC15array5Array3setGRP29bridgelab9bridgelab6BridgeE(next_bridges, _index, new _M0TP29bridgelab9bridgelab6Bridge(low, high, count));
      }
      return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE2Ok(new _M0TP29bridgelab9bridgelab5Board(self.rows, self.cols, self.islands, next_bridges));
    }
  } else {
    const _Some = _bind;
    const _error = _Some;
    return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11BridgeErrorE3Err(_error);
  }
}
function _M0MP29bridgelab9bridgelab5Board9propagate(self) {
  let current = self;
  const budget = (Math.imul(_M0MP29bridgelab9bridgelab5Board16candidate__edges(self).length, 2) | 0) + 1 | 0;
  let _tmp = 0;
  while (true) {
    const step = _tmp;
    if (step < budget) {
      if (_M0MP29bridgelab9bridgelab5Board18has__contradiction(current)) {
        return _M0MP29bridgelab9bridgelab5Board9propagateN6constrS1248;
      }
      const _bind = _M0MP29bridgelab9bridgelab5Board4hint(current);
      if (_bind === undefined) {
        return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(current);
      } else {
        const _Some = _bind;
        const _hint = _Some;
        const _bind$2 = _M0MP29bridgelab9bridgelab5Board11set__bridge(current, _hint.a, _hint.b, _hint.count);
        if (_bind$2.$tag === 0) {
          return _M0MP29bridgelab9bridgelab5Board9propagateN6constrS1249;
        } else {
          const _Ok = _bind$2;
          const _next = _Ok._0;
          if (_M0MP29bridgelab9bridgelab5Board9serialize(_next) === _M0MP29bridgelab9bridgelab5Board9serialize(current)) {
            return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(current);
          }
          current = _next;
        }
      }
      _tmp = step + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(current);
}
function _M0FP29bridgelab9bridgelab17search__solutions(board, edges, edge_index, solutions, nodes, max_nodes) {
  if (solutions.length >= 2 || _M0MPC15array5Array2atGiE(nodes, 0) >= max_nodes) {
    return undefined;
  }
  _M0MPC15array5Array3setGiE(nodes, 0, _M0MPC15array5Array2atGiE(nodes, 0) + 1 | 0);
  const _bind = _M0MP29bridgelab9bridgelab5Board9propagate(board);
  let current;
  if (_bind.$tag === 0) {
    return undefined;
  } else {
    const _Ok = _bind;
    current = _Ok._0;
  }
  if (_M0MP29bridgelab9bridgelab5Board12is__complete(current)) {
    _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(solutions, current);
    return undefined;
  }
  if (_M0MP29bridgelab9bridgelab5Board18has__contradiction(current) || edge_index >= edges.length) {
    return undefined;
  }
  const edge = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(edges, edge_index);
  const existing = _M0MP29bridgelab9bridgelab5Board13bridge__count(current, edge.a, edge.b);
  let _tmp = existing;
  while (true) {
    const count = _tmp;
    if (count <= 2) {
      _L: {
        if (count === existing) {
          _M0FP29bridgelab9bridgelab17search__solutions(current, edges, edge_index + 1 | 0, solutions, nodes, max_nodes);
        } else {
          const _bind$2 = _M0MP29bridgelab9bridgelab5Board11set__bridge(current, edge.a, edge.b, count);
          if (_bind$2.$tag === 0) {
            break _L;
          } else {
            const _Ok = _bind$2;
            const _next = _Ok._0;
            _M0FP29bridgelab9bridgelab17search__solutions(_next, edges, edge_index + 1 | 0, solutions, nodes, max_nodes);
          }
        }
        if (solutions.length >= 2 || _M0MPC15array5Array2atGiE(nodes, 0) >= max_nodes) {
          return undefined;
        }
        break _L;
      }
      _tmp = count + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP29bridgelab9bridgelab5Board13solve_2einner(self, max_nodes) {
  if (max_nodes <= 0) {
    return _M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached__;
  }
  const solutions = [];
  const nodes = [0];
  _M0FP29bridgelab9bridgelab17search__solutions(self, _M0MP29bridgelab9bridgelab5Board16candidate__edges(self), 0, solutions, nodes, max_nodes);
  return _M0MPC15array5Array2atGiE(nodes, 0) >= max_nodes && solutions.length < 2 ? _M0DTP29bridgelab9bridgelab12SolveOutcome18SearchLimitReached__ : solutions.length === 0 ? _M0DTP29bridgelab9bridgelab12SolveOutcome10NoSolution__ : solutions.length === 1 ? new _M0DTP29bridgelab9bridgelab12SolveOutcome14UniqueSolution(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(solutions, 0)) : new _M0DTP29bridgelab9bridgelab12SolveOutcome17MultipleSolutions(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(solutions, 0), _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(solutions, 1));
}
function _M0MP29bridgelab9bridgelab12SolveOutcome4kind(self) {
  switch (self.$tag) {
    case 0: {
      return "none";
    }
    case 1: {
      return "unique";
    }
    case 2: {
      return "multiple";
    }
    default: {
      return "limit";
    }
  }
}
function _M0MP29bridgelab9bridgelab5Board6assess(self) {
  const outcome = _M0MP29bridgelab9bridgelab5Board13solve_2einner(self, 100000);
  const solvable = _M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "unique" || _M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "multiple";
  const unique = _M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "unique";
  let difficulty;
  if (_M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "none") {
    difficulty = "impossible";
  } else {
    if (_M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "multiple") {
      difficulty = "ambiguous";
    } else {
      if (_M0MP29bridgelab9bridgelab12SolveOutcome4kind(outcome) === "limit") {
        difficulty = "unrated";
      } else {
        const _bind = _M0MP29bridgelab9bridgelab5Board9propagate(self);
        if (_bind.$tag === 1) {
          const _Ok = _bind;
          const _board = _Ok._0;
          difficulty = _M0MP29bridgelab9bridgelab5Board12is__complete(_board) ? "gentle" : _M0MP29bridgelab9bridgelab5Board16candidate__edges(self).length <= 12 ? "moderate" : _M0MP29bridgelab9bridgelab5Board16candidate__edges(self).length <= 24 ? "challenging" : "expert";
        } else {
          difficulty = "impossible";
        }
      }
    }
  }
  return new _M0TP29bridgelab9bridgelab16PuzzleAssessment(solvable, unique, difficulty, self.islands.length, _M0MP29bridgelab9bridgelab5Board16candidate__edges(self).length);
}
function _M0FP29bridgelab9bridgelab21board__analysis__json(board) {
  const assessment = _M0MP29bridgelab9bridgelab5Board6assess(board);
  const builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger13write__string(builder, "{\"ok\":true,\"solvable\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, assessment.solvable ? "true" : "false");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"unique\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, assessment.unique ? "true" : "false");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"difficulty\":\"");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, assessment.difficulty);
  _M0IPB13StringBuilderPB6Logger13write__string(builder, "\",\"islands\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0MPC13int3Int18to__string_2einner(assessment.island_count, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"candidates\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0MPC13int3Int18to__string_2einner(assessment.candidate_count, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(builder, ",\"contradictions\":");
  _M0IPB13StringBuilderPB6Logger13write__string(builder, _M0MPC13int3Int18to__string_2einner(_M0MP29bridgelab9bridgelab5Board14contradictions(board).length, 10));
  _M0IPB13StringBuilderPB6Logger13write__string(builder, "}");
  return builder.val;
}
function _M0FP29bridgelab9bridgelab6island(id, row, col, target) {
  return new _M0TP29bridgelab9bridgelab6Island(id, new _M0TP29bridgelab9bridgelab5Point(row, col), target);
}
function _M0FP29bridgelab9bridgelab13parse__number(text) {
  let value = 0;
  let found = false;
  const _it = _M0MPC16string10StringView4iter(text);
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _ch = _Some;
      const digit = _ch - 48 | 0;
      if (digit < 0 || digit > 9) {
        return undefined;
      }
      found = true;
      value = (Math.imul(value, 10) | 0) + digit | 0;
      continue;
    }
  }
  return found ? value : undefined;
}
function _M0FP29bridgelab9bridgelab11parse__four(text) {
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(text, new _M0TPC16string10StringView(_M0FP29bridgelab9bridgelab11parse__fourN7_2abindS954, 0, _M0FP29bridgelab9bridgelab11parse__fourN7_2abindS954.length)));
  if (parts.length !== 4) {
    return undefined;
  }
  const _bind = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 0));
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _a = _Some;
    const _bind$2 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 1));
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some$2 = _bind$2;
      const _b = _Some$2;
      const _bind$3 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 2));
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some$3 = _bind$3;
        const _c = _Some$3;
        const _bind$4 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 3));
        if (_bind$4 === undefined) {
          return undefined;
        } else {
          const _Some$4 = _bind$4;
          const _d = _Some$4;
          return { _0: _a, _1: _b, _2: _c, _3: _d };
        }
      }
    }
  }
}
function _M0FP29bridgelab9bridgelab12parse__three(text) {
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(text, new _M0TPC16string10StringView(_M0FP29bridgelab9bridgelab12parse__threeN7_2abindS970, 0, _M0FP29bridgelab9bridgelab12parse__threeN7_2abindS970.length)));
  if (parts.length !== 3) {
    return undefined;
  }
  const _bind = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 0));
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _a = _Some;
    const _bind$2 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 1));
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some$2 = _bind$2;
      const _b = _Some$2;
      const _bind$3 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(parts, 2));
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some$3 = _bind$3;
        const _c = _Some$3;
        return { _0: _a, _1: _b, _2: _c };
      }
    }
  }
}
function _M0FP29bridgelab9bridgelab19puzzle__error__text(error) {
  switch (error.$tag) {
    case 0: {
      const _InvalidDimensions = error;
      const _rows = _InvalidDimensions._0;
      const _cols = _InvalidDimensions._1;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "棋盘尺寸无效：");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _rows);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "x");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _cols);
      return _string_builder.val;
    }
    case 1: {
      const _DuplicateIslandId = error;
      const _id = _DuplicateIslandId._0;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "岛屿编号重复：");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _id);
      return _string_builder$2.val;
    }
    case 2: {
      const _DuplicateIslandPosition = error;
      const _row = _DuplicateIslandPosition._0;
      const _col = _DuplicateIslandPosition._1;
      const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "岛屿坐标重复：");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, _row);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, _col);
      return _string_builder$3.val;
    }
    case 3: {
      const _IslandOutOfBounds = error;
      const _id$2 = _IslandOutOfBounds._0;
      const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(27);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "岛屿坐标超出棋盘：");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, _id$2);
      return _string_builder$4.val;
    }
    default: {
      const _InvalidTarget = error;
      const _id$3 = _InvalidTarget._0;
      const _target = _InvalidTarget._1;
      const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(40);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "岛屿目标必须在 1 到 8 之间：");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, _id$3);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "=");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, _target);
      return _string_builder$5.val;
    }
  }
}
function _M0MP29bridgelab9bridgelab5Board3new(rows, cols, islands) {
  return new _M0TP29bridgelab9bridgelab5Board(rows, cols, _M0MPC15array5Array4copyGRP29bridgelab9bridgelab6BridgeE(islands), []);
}
function _M0MP29bridgelab9bridgelab5Board20validate__definition(self) {
  if (self.rows <= 0 || (self.cols <= 0 || (self.rows > 64 || self.cols > 64))) {
    return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(new _M0DTP29bridgelab9bridgelab11PuzzleError17InvalidDimensions(self.rows, self.cols));
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.islands.length) {
      const current = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, i);
      if (current.position.row < 0 || (current.position.row >= self.rows || (current.position.col < 0 || current.position.col >= self.cols))) {
        return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(new _M0DTP29bridgelab9bridgelab11PuzzleError17IslandOutOfBounds(current.id));
      }
      if (current.target < 1 || current.target > 8) {
        return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(new _M0DTP29bridgelab9bridgelab11PuzzleError13InvalidTarget(current.id, current.target));
      }
      let _tmp$2 = i + 1 | 0;
      while (true) {
        const j = _tmp$2;
        if (j < self.islands.length) {
          const other = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(self.islands, j);
          if (current.id === other.id) {
            return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(new _M0DTP29bridgelab9bridgelab11PuzzleError17DuplicateIslandId(current.id));
          }
          const _p = current.position;
          const _p$2 = other.position;
          if (_p.row === _p$2.row && _p.col === _p$2.col) {
            return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE3Err(new _M0DTP29bridgelab9bridgelab11PuzzleError23DuplicateIslandPosition(current.position.row, current.position.col));
          }
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP29bridgelab9bridgelab11PuzzleErrorE2Ok(undefined);
}
function _M0MP29bridgelab9bridgelab5Board8try__new(rows, cols, islands) {
  const board = _M0MP29bridgelab9bridgelab5Board3new(rows, cols, islands);
  const _bind = _M0MP29bridgelab9bridgelab5Board20validate__definition(board);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE3Err(_error);
  } else {
    return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardRP29bridgelab9bridgelab11PuzzleErrorE2Ok(board);
  }
}
function _M0MP29bridgelab9bridgelab5Board11deserialize(text) {
  const sections = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1075, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1075.length)));
  if (sections.length !== 4 || _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 0), new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1004, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1004.length)) && _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 0), new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1005, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1005.length))) {
    return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1250;
  }
  const dimensions = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 1), new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1074, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1074.length)));
  if (dimensions.length !== 2) {
    return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1251;
  }
  const _bind = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(dimensions, 0));
  if (_bind === undefined) {
    return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1252;
  } else {
    const _Some = _bind;
    const _rows = _Some;
    const _bind$2 = _M0FP29bridgelab9bridgelab13parse__number(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(dimensions, 1));
    if (_bind$2 === undefined) {
      return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1253;
    } else {
      const _Some$2 = _bind$2;
      const _cols = _Some$2;
      const islands = [];
      const _bind$3 = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 2);
      if ((_bind$3.end - _bind$3.start | 0) > 0) {
        const _it = _M0MPC16string10StringView5split(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 2), new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1028, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1028.length));
        while (true) {
          const _bind$4 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
          if (_bind$4 === undefined) {
            break;
          } else {
            const _Some$3 = _bind$4;
            const _item = _Some$3;
            const _bind$5 = _M0FP29bridgelab9bridgelab11parse__four(_item);
            if (_bind$5 === undefined) {
              return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1254;
            } else {
              const _Some$4 = _bind$5;
              const _x = _Some$4;
              const _id = _x._0;
              const _row = _x._1;
              const _col = _x._2;
              const _target = _x._3;
              _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(islands, _M0FP29bridgelab9bridgelab6island(_id, _row, _col, _target));
            }
            continue;
          }
        }
      }
      const _bind$4 = _M0MP29bridgelab9bridgelab5Board8try__new(_rows, _cols, islands);
      let board;
      if (_bind$4.$tag === 0) {
        const _Err = _bind$4;
        const _error = _Err._0;
        return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE3Err(_M0FP29bridgelab9bridgelab19puzzle__error__text(_error));
      } else {
        const _Ok = _bind$4;
        board = _Ok._0;
      }
      let result = board;
      const _bind$5 = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 3);
      if ((_bind$5.end - _bind$5.start | 0) > 0) {
        const _it = _M0MPC16string10StringView5split(_M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(sections, 3), new _M0TPC16string10StringView(_M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1056, 0, _M0MP29bridgelab9bridgelab5Board11deserializeN7_2abindS1056.length));
        while (true) {
          const _bind$6 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
          if (_bind$6 === undefined) {
            break;
          } else {
            const _Some$3 = _bind$6;
            const _item = _Some$3;
            const _bind$7 = _M0FP29bridgelab9bridgelab12parse__three(_item);
            if (_bind$7 === undefined) {
              return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1255;
            } else {
              const _Some$4 = _bind$7;
              const _x = _Some$4;
              const _a = _x._0;
              const _b = _x._1;
              const _count = _x._2;
              if (_count === 0 || _M0MP29bridgelab9bridgelab5Board13bridge__count(result, _a, _b) > 0) {
                return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1256;
              }
              const _bind$8 = _M0MP29bridgelab9bridgelab5Board11set__bridge(result, _a, _b, _count);
              if (_bind$8.$tag === 0) {
                return _M0MP29bridgelab9bridgelab5Board11deserializeN6constrS1257;
              } else {
                const _Ok = _bind$8;
                const _next = _Ok._0;
                result = _next;
              }
            }
            continue;
          }
        }
      }
      return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(result);
    }
  }
}
function _M0FP29bridgelab9bridgelab19bridgelab__validate(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `{\"ok\":false,\"error\":\"${_error}\"}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    return _M0FP29bridgelab9bridgelab19board__status__json(_board);
  }
}
function _M0FP29bridgelab9bridgelab16bridgelab__apply(snapshot, a, b, count) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `ERROR|Snapshot|${_error}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    const _bind$2 = _M0MP29bridgelab9bridgelab5Board11set__bridge(_board, a, b, count);
    if (_bind$2.$tag === 0) {
      const _Err = _bind$2;
      const _error = _Err._0;
      return `ERROR|${_M0FP29bridgelab9bridgelab19bridge__error__text(_error)}`;
    } else {
      const _Ok$2 = _bind$2;
      const _next = _Ok$2._0;
      return _M0MP29bridgelab9bridgelab5Board9serialize(_next);
    }
  }
}
function _M0FP29bridgelab9bridgelab17bridgelab__status(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `{\"ok\":false,\"error\":\"${_error}\"}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    return _M0FP29bridgelab9bridgelab19board__status__json(_board);
  }
}
function _M0MP29bridgelab9bridgelab5Board11smart__hint(self) {
  const _bind = _M0MP29bridgelab9bridgelab5Board4hint(self);
  if (_bind === undefined) {
    const _bind$2 = _M0MP29bridgelab9bridgelab5Board13solve_2einner(self, 100000);
    if (_bind$2.$tag === 1) {
      const _UniqueSolution = _bind$2;
      const _solution = _UniqueSolution._0;
      const _bind$3 = _M0MP29bridgelab9bridgelab5Board16candidate__edges(self);
      const _bind$4 = _bind$3.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const edge = _bind$3[_];
          const current = _M0MP29bridgelab9bridgelab5Board13bridge__count(self, edge.a, edge.b);
          const desired = _M0MP29bridgelab9bridgelab5Board13bridge__count(_solution, edge.a, edge.b);
          if (desired > current) {
            const _bind$5 = _M0FP29bridgelab9bridgelab14validate__edge(self, edge.a, edge.b, desired);
            if (_bind$5 === undefined) {
              return new _M0TP29bridgelab9bridgelab4Hint(edge.a, edge.b, desired, "[UNIQUE_SOLUTION] 排除其他取值后，该桥在唯一解中被确定");
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    const _Some = _bind;
    const _direct_hint = _Some;
    return _direct_hint;
  }
}
function _M0FP29bridgelab9bridgelab15bridgelab__hint(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `ERROR|Snapshot|${_error}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    const _bind$2 = _M0MP29bridgelab9bridgelab5Board11smart__hint(_board);
    if (_bind$2 === undefined) {
      return "NONE";
    } else {
      const _Some = _bind$2;
      const _hint = _Some;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "HINT|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _hint.a);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _hint.b);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "|");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, _hint.count);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "|");
      return `${_string_builder.val}${_hint.reason}`;
    }
  }
}
function _M0FP29bridgelab9bridgelab18bridgelab__analyze(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `{\"ok\":false,\"error\":\"${_error}\"}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    return _M0FP29bridgelab9bridgelab21board__analysis__json(_board);
  }
}
function _M0MP29bridgelab9bridgelab5Board13serialize__v2(self) {
  const legacy = _M0MP29bridgelab9bridgelab5Board9serialize(self);
  return `BRIDGELAB2${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(legacy, 9, undefined))}`;
}
function _M0FP29bridgelab9bridgelab16bridgelab__solve(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `ERROR|Snapshot|${_error}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    const _bind$2 = _M0MP29bridgelab9bridgelab5Board13solve_2einner(_board, 100000);
    switch (_bind$2.$tag) {
      case 0: {
        return "NO_SOLUTION";
      }
      case 1: {
        const _UniqueSolution = _bind$2;
        const _solution = _UniqueSolution._0;
        return `SOLUTION|${_M0MP29bridgelab9bridgelab5Board13serialize__v2(_solution)}`;
      }
      case 2: {
        return "MULTIPLE_SOLUTIONS";
      }
      default: {
        return "SEARCH_LIMIT";
      }
    }
  }
}
function _M0FP29bridgelab9bridgelab5point(row, col) {
  return new _M0TP29bridgelab9bridgelab5Point(row, col);
}
function _M0FP29bridgelab9bridgelab16generate__puzzle(rows, cols, seed) {
  if (rows < 3 || (cols < 3 || (rows > 64 || cols > 64))) {
    return _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1258;
  }
  const normalized = seed < 0 ? -seed | 0 : seed;
  const reverse_rows = (normalized % 2 | 0) === 1;
  const reverse_cols = ((normalized / 2 | 0) % 2 | 0) === 1;
  let horizontal = ((normalized / 4 | 0) % 2 | 0) === 0;
  const row_direction = reverse_rows ? -1 : 1;
  const col_direction = reverse_cols ? -1 : 1;
  let row = reverse_rows ? rows - 1 | 0 : 0;
  let col = reverse_cols ? cols - 1 | 0 : 0;
  const positions = [_M0FP29bridgelab9bridgelab5point(row, col)];
  let horizontal_open = true;
  let vertical_open = true;
  while (true) {
    if (horizontal_open || vertical_open) {
      let moved = false;
      if (horizontal && horizontal_open) {
        const next_col = col + (Math.imul(col_direction, 2) | 0) | 0;
        if (next_col >= 0 && next_col < cols) {
          col = next_col;
          _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(positions, _M0FP29bridgelab9bridgelab5point(row, col));
          moved = true;
        } else {
          horizontal_open = false;
        }
      } else {
        if (!horizontal && vertical_open) {
          const next_row = row + (Math.imul(row_direction, 2) | 0) | 0;
          if (next_row >= 0 && next_row < rows) {
            row = next_row;
            _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(positions, _M0FP29bridgelab9bridgelab5point(row, col));
            moved = true;
          } else {
            vertical_open = false;
          }
        }
      }
      horizontal = !horizontal;
      if (!moved && !(horizontal_open || vertical_open)) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  if (positions.length < 2) {
    return _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1259;
  }
  const islands = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < positions.length) {
      const target = i === 0 || i === (positions.length - 1 | 0) ? 1 : 2;
      _M0MPC15array5Array4pushGRP29bridgelab9bridgelab6IslandE(islands, _M0FP29bridgelab9bridgelab6island(i + 1 | 0, _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(positions, i).row, _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(positions, i).col, target));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = _M0MP29bridgelab9bridgelab5Board8try__new(rows, cols, islands);
  if (_bind.$tag === 0) {
    return _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1260;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    const _p = _M0MP29bridgelab9bridgelab5Board6assess(_board);
    if (_p.unique) {
      return new _M0DTPC16result6ResultGRP29bridgelab9bridgelab5BoardsE2Ok(_board);
    } else {
      return _M0FP29bridgelab9bridgelab16generate__puzzleN6constrS1261;
    }
  }
}
function _M0FP29bridgelab9bridgelab19bridgelab__generate(rows, cols, seed) {
  const _bind = _M0FP29bridgelab9bridgelab16generate__puzzle(rows, cols, seed);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `ERROR|Generator|${_error}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    return _M0MP29bridgelab9bridgelab5Board13serialize__v2(_board);
  }
}
function _M0FP29bridgelab9bridgelab19bridgelab__topology(snapshot) {
  const _bind = _M0MP29bridgelab9bridgelab5Board11deserialize(snapshot);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return `ERROR|Snapshot|${_error}`;
  } else {
    const _Ok = _bind;
    const _board = _Ok._0;
    const builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(builder, "TOPOLOGY|");
    const edges = _M0MP29bridgelab9bridgelab5Board16candidate__edges(_board);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < edges.length) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(builder, 59);
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
        const _p = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(edges, i);
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _p.a);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
        const _p$2 = _M0MPC15array5Array2atGRP29bridgelab9bridgelab13CandidateEdgeE(edges, i);
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _p$2.b);
        _M0IPB13StringBuilderPB6Logger13write__string(builder, _string_builder.val);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return builder.val;
  }
}
export { _M0FP29bridgelab9bridgelab19bridgelab__validate as bridgelab_validate, _M0FP29bridgelab9bridgelab16bridgelab__apply as bridgelab_apply, _M0FP29bridgelab9bridgelab17bridgelab__status as bridgelab_status, _M0FP29bridgelab9bridgelab15bridgelab__hint as bridgelab_hint, _M0FP29bridgelab9bridgelab18bridgelab__analyze as bridgelab_analyze, _M0FP29bridgelab9bridgelab16bridgelab__solve as bridgelab_solve, _M0FP29bridgelab9bridgelab19bridgelab__generate as bridgelab_generate, _M0FP29bridgelab9bridgelab19bridgelab__topology as bridgelab_topology }
