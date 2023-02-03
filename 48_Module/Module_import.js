// ESM의 경우 파일 확장자를 생략할 수 없습니다
// 같은 폴더 내의 lib.mjs 모듈이 export 한 식별자 이름으로 import 합니다.
import { pi, square, Person} from './lib.mjs'

console.log(pi)

import * as lib from './lib.mjs'

console.log(lib.pi)
//from 파일에서 export한 모든 식별자를 객체로 담아온다.


import {pi as PI, square as sq} from './lib.mjs'
//식별자 이름을 변경해서 import한다.

console.log(PI)

