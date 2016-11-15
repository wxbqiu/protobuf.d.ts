
declare module dcodeIO {
	export class Long {
		public low:number;
		public high:number;
		public unsigned:boolean;
		constructor(low?:number, high?:number, unsigned?:boolean);
		public static fromInt(value:number, unsigned?:boolean):Long;
		public static fromNumber(value:number, unsigned?:boolean):Long;
		public static fromBits(lowBits?:number, highBits?:number, unsigned?:boolean):Long;
		public static fromString(str:string, unsigned?:any, radix?:number):Long;
		public static fromValue(val:any):Long;
		public toInt():number;
		public toNumber():number;
		public toString(radix:number):string;
		public getHighBits():number;
		public getHighBitsUnsigned():number;
		public getLowBits():number;
		public getLowBitsUnsigned():number;
		public getNumBitsAbs():number;
		public isZero():boolean;
		public isNegative():boolean;
		public isPositive():boolean;
		public isOdd():boolean;
		public isEven():boolean;
		public equals(other:any):boolean;
		public eq(other:any):boolean;
		public notEquals(other:any);
		public neq(other:any);
		public lessThan(other:any):boolean;
		public lt(other:any):boolean;
		public lessThanOrEqual(other:any):boolean;
		public lte(other:any):boolean;
		public greaterThan(other:any):boolean;
		public gt(other:any):boolean;
		public greaterThanOrEqual(other:any):boolean;
		public gte(other:any):boolean;
		public compare(other:any):number;
		public comp(other:any):number;
		public negate():Long;
		public neg():Long;
		public add(addend:any):Long;
		public subtract(subtrahend:any):Long;
		public sub(subtrahend:any):Long;
		public multiply(multiplier:any):Long;
		public mul(multiplier:any):Long;
		public divide(divisor:any):Long;
		public div(divisor:any):Long;
		public modulo(divisor:any):Long;
		public mod(divisor:any):Long;
		public not():Long;
		public and(other:any):Long;
		public or(other:any):Long;
		public xor(other:any):Long;
		public shiftLeft(numBits:any):Long;
		public shl(numBits:any):Long;
		public shiftRight(numBits:any):Long;
		public shr(numBits:any):Long;
		public shiftRightUnsigned(numBits:any):Long;
		public shru(numBits:any):Long;
		public toSigned():Long;
		public toUnsigned():Long;
		public toBytes(le:boolean):number[];
		public toBytesLE():number[];
		public toBytesBE():number[];
	}

	export class ByteBuffer {
		public buffer:number;
		public view:number;
		public offset:number;
		public markedOffset:number;
		public limit:number;
		public littleEndian:boolean;
		public noAssert:boolean;
		public static VERSION:string;
		public static LITTLE_ENDIAN:boolean;
		public static BIG_ENDIAN:boolean;
		public static DEFAULT_CAPACITY:number;
		public static DEFAULT_ENDIAN:boolean;
		public static DEFAULT_NOASSERT:boolean;
		public static Long:any;
		public static accessor():any;
		public static allocate(capacity?:number, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
		public static concat(buffers:any, encoding?:any, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
		public static isByteBuffer(bb:any):boolean;
		public static type():any;
		public static wrap(buffer:any, encoding?:any, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
		constructor(capacity?:number, littleEndian?:boolean, noAssert?:boolean);
		public writeBitSet(value:boolean[], offset?:number):ByteBuffer;
		public readBitSet(offset?:number):boolean[];
		public readBytes(length:number, offset?:number):ByteBuffer;
		public writeInt8(value:number, offset?:number):ByteBuffer;
		public writeByte(value:number, offset?:number):ByteBuffer;
		public readInt8(offset?:number):number;
		public readByte(offset?:number):number;
		public writeUint8(value:number, offset?:number):ByteBuffer;
		public writeUInt8(value:number, offset?:number):ByteBuffer;
		public readUint8(offset?:number):number;
		public readUInt8(offset?:number):number;
		public writeInt16(value:number, offset?:number):ByteBuffer;
		public writeShort(value:number, offset?:number):ByteBuffer;
		public readInt16(offset?:number):number;
		public readShort(offset?:number):number;
		public writeUint16(value:number, offset?:number):ByteBuffer;
		public writeUInt16(value:number, offset?:number):ByteBuffer;
		public readUint16(offset?:number):number;
		public readUInt16(offset?:number):number;
		public writeInt32(value:number, offset?:number):ByteBuffer;
		public writeInt(value:number, offset?:number):ByteBuffer;
		public readInt32(offset?:number):number;
		public readInt(offset?:number):number;
		public writeUint32(value:number, offset?:number):ByteBuffer;
		public writeUInt32(value:number, offset?:number):ByteBuffer;
		public readUint32(offset?:number):number;
		public readUInt32(offset?:number):number;
		public writeInt64(value:any, offset?:number):ByteBuffer;
		public writeLong(value:any, offset?:number):ByteBuffer;
		public readInt64(offset?:number):Long;
		public readLong(offset?:number):Long;
		public writeUint64(value:any, offset?:number):ByteBuffer;
		public writeUInt64(value:any, offset?:number):ByteBuffer;
		public readUint64(offset?:number):Long;
		public readUInt64(offset?:number):Long;
		public writeFloat32(value:number, offset?:number):ByteBuffer;
		public writeFloat(value:number, offset?:number):ByteBuffer;
		public readFloat32(offset?):number;
		public readFloat(offset?):number;
		public writeFloat64(value:number, offset?:number):ByteBuffer;
		public writeDouble(value:number, offset?:number):ByteBuffer;
		public readFloat64(offset?:number):number;
		public readDouble(offset?:number):number;
		public static MAX_VARINT32_BYTES:number;
		public static calculateVarint32(value:number):number;
		public static zigZagEncode32(n:number):number;
		public static zigZagDecode32(n:number):number;
		public writeVarint32(value:number, offset?:number):any;
		public writeVarint32ZigZag(value:number, offset?:number):any;
		public readVarint32(offset?:number):any;
		public readVarint32ZigZag(offset?:number):any;
		public static MAX_VARINT64_BYTES:number;
		public static calculateVarint64(value:any):number;
		public static zigZagEncode64(value:any):Long;
		public static zigZagDecode64(value:any):Long;
		public writeVarint64(value:any, offset?:number):any;
		public writeVarint64ZigZag(value:any, offset?:number):any;
		public readVarint64(offset?:number):any;
		public readVarint64ZigZag(offset?:number):any;
		public writeCString(str:string, offset?:number):any;
		public readCString(offset?:number):any;
		public writeIString(str:string, offset?:number):any;
		public readIString(offset?:number):any;
		public static METRICS_CHARS:string;
		public static METRICS_BYTES:string;
		public writeUTF8String(str:string, offset?:number):any;
		public writeString(str:string, offset?:number):any;
		public static calculateUTF8Chars(str:string):number;
		public static calculateUTF8Bytes(str:string):number;
		public static calculateString(str:string):number;
		public readUTF8String(length:number, metrics?:string, offset?:number):any;
		public readString(length:number, metrics?:string, offset?:number):any;
		public writeVString(str:string, offset?:number):any;
		public readVString(offset?:number):any;
		public append(source:any, encoding?:any, offset?:number):ByteBuffer;
		public appendTo(target:ByteBuffer, offset?:number):ByteBuffer;
		public assert(assert:boolean):ByteBuffer;
		public capacity():number;
		public clear():ByteBuffer;
		public clone(copy?:boolean):ByteBuffer;
		public compact(begin?:number, end?:number):ByteBuffer;
		public copy(begin?:number, end?:number):ByteBuffer;
		public copyTo(target:ByteBuffer, targetOffset?:number, sourceOffset?:number, sourceLimit?:number):ByteBuffer;
		public ensureCapacity(capacity:number):ByteBuffer;
		public fill(value:any, begin?:number, end?:number):ByteBuffer;
		public flip():ByteBuffer;
		public mark(offset?:number):ByteBuffer;
		public order(littleEndian:boolean):ByteBuffer;
		public LE(littleEndian?:boolean):ByteBuffer;
		public BE(bigEndian?:boolean):ByteBuffer;
		public prepend(source:any, encoding?:any, offset?:number):ByteBuffer;
		public prependTo(target:ByteBuffer, offset?:number):ByteBuffer;
		public printDebug(out?:any):void;
		public remaining():number;
		public reset():ByteBuffer;
		public resize(capacity:number):ByteBuffer;
		public reverse(begin?:number, end?:number):ByteBuffer;
		public skip(length:number):ByteBuffer;
		public slice(begin?:number, end?:number):ByteBuffer;
		public toBuffer(forceCopy?:boolean):ArrayBuffer;
		public toArrayBuffer(forceCopy?:boolean):ArrayBuffer;
		public toString(encoding?:string, begin?:number, end?:number):string;
		public toBase64(begin?:number, end?:number):string;
		public static fromBase64(str:string, littleEndian?:boolean):ByteBuffer;
		public static btoa(str:string):string;
		public static atob(b64:string):string;
		public toBinary(begin?:number, end?:number):string;
		public static fromBinary(str:string, littleEndian?:boolean):ByteBuffer;
		public toDebug(columns?:boolean):any;
		public static fromDebug(str:string, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
		public toHex(begin?:number, end?:number):string;
		public static fromHex(str:string, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
		public toUTF8(begin?:number, end?:number):string;
		public static fromUTF8(str:string, littleEndian?:boolean, noAssert?:boolean):ByteBuffer;
	}

	export module ProtoBuf {
		function loadProto(proto:any, builder?:any, filename?:any):Builder;
		function protoFromString(proto:any, builder?:any, filename?:any):Builder;
		function loadProtoFile(filename:any, callback?:any, builder?:Builder):Builder;
		function protoFromFile(filename:any, callback?:any, builder?:Builder):Builder;
		function newBuilder(options?:any);
		function loadJson(json:any, builder?:Builder, filename?:any):Builder;
		function loadJsonFile(filename:any, callback?:any, builder?:Builder):Builder;
		export class Builder {
			public ns:any;
			public ptr:any;
			public resolved:boolean;
			public result:any;
			public files:string[];
			public importRoot:string;
			public options:any;

			public static isMessage(def:any):boolean;
			public static isMessageField(def:any):boolean;
			public static isEnum(def:any):boolean;
			public static isService(def:any):boolean;
			public static isExtend(def):boolean;
			public reset():Builder;
			public define(namespace:string):Builder;
			public create(defs:any):Builder;
			public import(json:any, filename?:any):Builder; 
			public resolveAll():Builder;
			public build(path?:any):any;
			public lookup(path?:string, excludeNonNamespace?:boolean):any;
			public toString():string;
		}

		export class Map {
			constructor(field:Reflect.Message.Field, contents:any);
			public field:Reflect.Message.Field;
			public keyElem:Reflect.Element;
			public valueElem:Reflect.Element;
			public map:any;
			public clear():void;
			public delete(key:any):boolean;
			public entries():any;
			public keys():any;
			public values():any;
			public forEach(cb:any, thisArg:any):void;
			public set(key:any, value:any):Map;
			public get(key:any):any;
			public has(key:any):boolean;
		}

		export module Util {
			let IS_NODE:boolean;
			function XHR():XMLHttpRequest;
			function fetch(patch:string, callback?:any):string;
			function toCamelCase(str:string):string;
		}

		export module Builder {
			export class Message {
				constructor(values:any, var_args:string);
				public add(key:string, value:any, noAssert?:boolean):Message;
				public $add(key:string, value:any, noAssert?:boolean):Message;
				public set(keyOrObj:any, value?:any, noAssert?:boolean):Message;
				public $set(keyOrObj:any, value?:any, noAssert?:boolean):Message;
				public get(key:string, noAssert?:boolean):any;
				public $get(key:string, noAssert?:boolean):any;
				public encode(buffer?:any, noVerify?:boolean):ByteBuffer;
				public static encode(data:any, buffer?:any, noVerify?:boolean):ByteBuffer;
				public calculate():number;
				public encodeDelimited(buffer?:any, noVerify?:boolean):ByteBuffer;
				public encodeAB():ArrayBuffer;
				public toArrayBuffer():ArrayBuffer;
				public encodeNB():ArrayBuffer;
				public toBuffer():ArrayBuffer;
				public encode64():string;
				public toBase64():string;
				public encodeHex():string;
				public toHex():string;
				public toRaw(binaryAsBase64?:boolean, longsAsStrings?:boolean):any;
				public encodeJSON():string;
				public decode(buffer:any, length?:any, enc?:string):Message;
				public decodeDelimited(buffer:any, enc?:string):Message;
				public decode64(str:string):Message;
				public decodeHex(str:string):Message;
				public decodeJSON(str:string):Message;
				public toString():string;
			}

			export class Enum {

			}

			export class Service {
				constructor(rpcImpl?:any);
			}
		}

		export module DotProto {
			export class Parser {
				constructor(source:string);
				public tn:Tokenizer;
				public proto3:boolean;
				public parse():any;
				public static parse(source:string):any;
				public toString():string;
			}

			export class Tokenizer {
				constructor(proto:string);
				public source:string;
				public index:number;
				public line:number;
				public stack:string[];
				public next():string;
				public peek():string;
				public skip(expected:string):void;
				public omit(expected:string):boolean;
				public toString():string;
			}
		}

		export module Reflect {
			export class Element {
				constructor(type:any, resolvedType:T, isMapKey:boolean, syntax:string, name:string);
				public type:any;
				public resolvedType:T;
				public isMapKey:boolean;
				public syntax:string;
				public name:string;
				public defaultFieldValue(type:any) :any;
				public toString():string;
				public verifyValue(value:any):any;
				public calculateLength(id:number, value:any):number;
				public encodeValue(id:number, value:any, buffer:ByteBuffer):ByteBuffer;
				public decode(buffer:ByteBuffer, wireType:number, id:number):any;
				public valueFromString(str:string):any;
				public valueToString(value:any):string;
			}

			export class Enum {
				constructor(builder:Builder, parent:T, name:string, options?:any, syntax?:string);
				public className:string;
				public object:any;
				public static getName(enm:Builder.Enum, value:number):string;
				public build(rebuild:boolean):any;
			}

			export class Extension {
				constructor(builder:Builder, parent:T, name:string, field:Message.Field);
				public field:Message.Field;
			}

			export class Message {
				constructor(builder:Builder, parent:Namespace, name:string, options?:any, isGroup?:boolean, syntax?:string);
				public className:string;
				public extensions:number[];
				public clazz:any;
				public isGroup:boolean;
				public build(rebuild?:boolean):Message;
				public encode(message:Message, buffer:ByteBuffer, noVerify?:boolean):ByteBuffer;
				public calculate(message:Message):number;
				public decode(buffer:ByteBuffer, length?:number, expectedGroupEndId?:number):Message;
			}

			export class Namespace {
				constructor(builder:Builder, parent:Namespace, name:string, options?:any, syntax?:string);
				public className:string;
				public children:T[];
				public option:any;
				public syntax:string;
				public getChildren(type?:T):T[];
				public addChild(child:T):void;
				public getChild(nameOrId:any):T;
				public resolve(qn:any, excludeNonNamespace?:boolean):Namespace;
				public qn(t:T):string;
				public build():any;
				public buildOpt():any;
				public getOption(name?:string):any;
			}

			export class Service {
				constructor(builder:Builder, root:Namespace, name:string, options?:any);
				public className:string;
				public clazz:any;
				public build(rebuild?:boolean):any;
			}

			export class T {
				constructor(builder:Builder, parent:T, name:string);
				public builder:Builder;
				public parent:T;
				public name:string;
				public className:string;
				public fqn():string;
				public toString(includeClass?:boolean):string;
				public build():void;
			}

			export module Enum {
				export class Value {
					constructor(builder:Builder, enm:Reflect.Enum, name:string, id:number);
					public className:string;
					public id:number;	
				}
			}


			export module Message {
				export class ExtensionField {
					constructor(builder:Builder, message:Reflect.Message, rule:string, type:string, name:string, id:number, options?:any);
					public extension:Extension;
				}

				export class Field {
					constructor(builder:Builder, message:Reflect.Message, rule:string, keytype:string, type:string, name:string, id:number, options?:any, oneof?:Reflect.Message.OneOf, syntax?:string);
					public required:boolean;
					public repeated:boolean;
					public map:boolean;
					public keyType:any;
					public type:any;
					public resolvedType:Reflect.T;
					public id:number;
					public options:any;
					public defaultValue:any;
					public oneof:Reflect.Message.OneOf;
					public syntax:string;
					public originalName:string;
					public element:Element;
					public keyElement:Element;
					public build():void;
					public verifyValue(value:any, skipRepeated?:boolean):any;
					public hasWirePresence(value:any, message:Builder.Message):boolean;
					public encode(value:any, buffer:ByteBuffer, message:Builder.Message):ByteBuffer;
					public calculate(value:any, message:Builder.Message):number;
					public decode(wireType:number, buffer:ByteBuffer, skipRepeated?:boolean):any;
				}

				export class OneOf {
					constructor(builder:Builder, message:Reflect.Message, name:string);
					public fields:Field
				}
			}
			
			export module Service {
				export class Method {
					constructor(builder:Builder, svc:Service, name:string, options?:any);
					public className:string;
					public options:any;
				}

				export class RPCMethod {
					constructor(builder:Builder, svc:Reflect.Service, name:string, request:string, response:string, request_stream:boolean, response_stream:boolean, options:any);
					public className:string;
					public requestName:string;
					public responseName:string;
					public requestStream:boolean;
					public responseStream:boolean;
					public resolvedRequestType:Reflect.Message;
					public resolvedResponseType:Reflect.Message;
				}
			}
		}
	}
}