// ESM의 경우 파일 확장자를 생략할 수 없습니다
// 같은 폴더 내의 lib.mjs 모듈이 export 한 식별자 이름으로 import 합니다.
import { pi, square, Person} from './lib.mjs'

console.log(pi)