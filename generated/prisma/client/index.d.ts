
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model ScheduleBlock
 * 
 */
export type ScheduleBlock = $Result.DefaultSelection<Prisma.$ScheduleBlockPayload>
/**
 * Model RoomQuietBlock
 * 
 */
export type RoomQuietBlock = $Result.DefaultSelection<Prisma.$RoomQuietBlockPayload>
/**
 * Model RoomTaskTemplate
 * 
 */
export type RoomTaskTemplate = $Result.DefaultSelection<Prisma.$RoomTaskTemplatePayload>
/**
 * Model RoomTask
 * 
 */
export type RoomTask = $Result.DefaultSelection<Prisma.$RoomTaskPayload>
/**
 * Model TaskPreference
 * 
 */
export type TaskPreference = $Result.DefaultSelection<Prisma.$TaskPreferencePayload>
/**
 * Model AssignedTask
 * 
 */
export type AssignedTask = $Result.DefaultSelection<Prisma.$AssignedTaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TimeBlockType: {
  QUIET: 'QUIET',
  BUSY: 'BUSY',
  TASK: 'TASK'
};

export type TimeBlockType = (typeof TimeBlockType)[keyof typeof TimeBlockType]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type TimeBlockType = $Enums.TimeBlockType

export const TimeBlockType: typeof $Enums.TimeBlockType

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleBlock`: Exposes CRUD operations for the **ScheduleBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleBlocks
    * const scheduleBlocks = await prisma.scheduleBlock.findMany()
    * ```
    */
  get scheduleBlock(): Prisma.ScheduleBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomQuietBlock`: Exposes CRUD operations for the **RoomQuietBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomQuietBlocks
    * const roomQuietBlocks = await prisma.roomQuietBlock.findMany()
    * ```
    */
  get roomQuietBlock(): Prisma.RoomQuietBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomTaskTemplate`: Exposes CRUD operations for the **RoomTaskTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTaskTemplates
    * const roomTaskTemplates = await prisma.roomTaskTemplate.findMany()
    * ```
    */
  get roomTaskTemplate(): Prisma.RoomTaskTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomTask`: Exposes CRUD operations for the **RoomTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTasks
    * const roomTasks = await prisma.roomTask.findMany()
    * ```
    */
  get roomTask(): Prisma.RoomTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskPreference`: Exposes CRUD operations for the **TaskPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskPreferences
    * const taskPreferences = await prisma.taskPreference.findMany()
    * ```
    */
  get taskPreference(): Prisma.TaskPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignedTask`: Exposes CRUD operations for the **AssignedTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignedTasks
    * const assignedTasks = await prisma.assignedTask.findMany()
    * ```
    */
  get assignedTask(): Prisma.AssignedTaskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Room: 'Room',
    ScheduleBlock: 'ScheduleBlock',
    RoomQuietBlock: 'RoomQuietBlock',
    RoomTaskTemplate: 'RoomTaskTemplate',
    RoomTask: 'RoomTask',
    TaskPreference: 'TaskPreference',
    AssignedTask: 'AssignedTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "scheduleBlock" | "roomQuietBlock" | "roomTaskTemplate" | "roomTask" | "taskPreference" | "assignedTask"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      ScheduleBlock: {
        payload: Prisma.$ScheduleBlockPayload<ExtArgs>
        fields: Prisma.ScheduleBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findFirst: {
            args: Prisma.ScheduleBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findMany: {
            args: Prisma.ScheduleBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          create: {
            args: Prisma.ScheduleBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          createMany: {
            args: Prisma.ScheduleBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          update: {
            args: Prisma.ScheduleBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          aggregate: {
            args: Prisma.ScheduleBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleBlock>
          }
          groupBy: {
            args: Prisma.ScheduleBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleBlockCountAggregateOutputType> | number
          }
        }
      }
      RoomQuietBlock: {
        payload: Prisma.$RoomQuietBlockPayload<ExtArgs>
        fields: Prisma.RoomQuietBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomQuietBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomQuietBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          findFirst: {
            args: Prisma.RoomQuietBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomQuietBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          findMany: {
            args: Prisma.RoomQuietBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>[]
          }
          create: {
            args: Prisma.RoomQuietBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          createMany: {
            args: Prisma.RoomQuietBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomQuietBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          update: {
            args: Prisma.RoomQuietBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          deleteMany: {
            args: Prisma.RoomQuietBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomQuietBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomQuietBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomQuietBlockPayload>
          }
          aggregate: {
            args: Prisma.RoomQuietBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomQuietBlock>
          }
          groupBy: {
            args: Prisma.RoomQuietBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomQuietBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomQuietBlockCountArgs<ExtArgs>
            result: $Utils.Optional<RoomQuietBlockCountAggregateOutputType> | number
          }
        }
      }
      RoomTaskTemplate: {
        payload: Prisma.$RoomTaskTemplatePayload<ExtArgs>
        fields: Prisma.RoomTaskTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTaskTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTaskTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          findFirst: {
            args: Prisma.RoomTaskTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTaskTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          findMany: {
            args: Prisma.RoomTaskTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>[]
          }
          create: {
            args: Prisma.RoomTaskTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          createMany: {
            args: Prisma.RoomTaskTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomTaskTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          update: {
            args: Prisma.RoomTaskTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          deleteMany: {
            args: Prisma.RoomTaskTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTaskTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomTaskTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskTemplatePayload>
          }
          aggregate: {
            args: Prisma.RoomTaskTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomTaskTemplate>
          }
          groupBy: {
            args: Prisma.RoomTaskTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTaskTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTaskTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTaskTemplateCountAggregateOutputType> | number
          }
        }
      }
      RoomTask: {
        payload: Prisma.$RoomTaskPayload<ExtArgs>
        fields: Prisma.RoomTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          findFirst: {
            args: Prisma.RoomTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          findMany: {
            args: Prisma.RoomTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>[]
          }
          create: {
            args: Prisma.RoomTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          createMany: {
            args: Prisma.RoomTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          update: {
            args: Prisma.RoomTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          deleteMany: {
            args: Prisma.RoomTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTaskPayload>
          }
          aggregate: {
            args: Prisma.RoomTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomTask>
          }
          groupBy: {
            args: Prisma.RoomTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTaskCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTaskCountAggregateOutputType> | number
          }
        }
      }
      TaskPreference: {
        payload: Prisma.$TaskPreferencePayload<ExtArgs>
        fields: Prisma.TaskPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          findFirst: {
            args: Prisma.TaskPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          findMany: {
            args: Prisma.TaskPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>[]
          }
          create: {
            args: Prisma.TaskPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          createMany: {
            args: Prisma.TaskPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          update: {
            args: Prisma.TaskPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          deleteMany: {
            args: Prisma.TaskPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPreferencePayload>
          }
          aggregate: {
            args: Prisma.TaskPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskPreference>
          }
          groupBy: {
            args: Prisma.TaskPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<TaskPreferenceCountAggregateOutputType> | number
          }
        }
      }
      AssignedTask: {
        payload: Prisma.$AssignedTaskPayload<ExtArgs>
        fields: Prisma.AssignedTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignedTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignedTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          findFirst: {
            args: Prisma.AssignedTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignedTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          findMany: {
            args: Prisma.AssignedTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>[]
          }
          create: {
            args: Prisma.AssignedTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          createMany: {
            args: Prisma.AssignedTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignedTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          update: {
            args: Prisma.AssignedTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          deleteMany: {
            args: Prisma.AssignedTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignedTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignedTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTaskPayload>
          }
          aggregate: {
            args: Prisma.AssignedTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignedTask>
          }
          groupBy: {
            args: Prisma.AssignedTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignedTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignedTaskCountArgs<ExtArgs>
            result: $Utils.Optional<AssignedTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    scheduleBlock?: ScheduleBlockOmit
    roomQuietBlock?: RoomQuietBlockOmit
    roomTaskTemplate?: RoomTaskTemplateOmit
    roomTask?: RoomTaskOmit
    taskPreference?: TaskPreferenceOmit
    assignedTask?: AssignedTaskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scheduleBlocks: number
    createdQuietBlock: number
    taskPreferences: number
    assignedTasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleBlocks?: boolean | UserCountOutputTypeCountScheduleBlocksArgs
    createdQuietBlock?: boolean | UserCountOutputTypeCountCreatedQuietBlockArgs
    taskPreferences?: boolean | UserCountOutputTypeCountTaskPreferencesArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedQuietBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomQuietBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskPreferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTaskWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    participants: number
    quietTimeBlocks: number
    RoomTasks: number
    assignedTasks: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RoomCountOutputTypeCountParticipantsArgs
    quietTimeBlocks?: boolean | RoomCountOutputTypeCountQuietTimeBlocksArgs
    RoomTasks?: boolean | RoomCountOutputTypeCountRoomTasksArgs
    assignedTasks?: boolean | RoomCountOutputTypeCountAssignedTasksArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountQuietTimeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomQuietBlockWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTaskWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTaskWhereInput
  }


  /**
   * Count Type RoomTaskCountOutputType
   */

  export type RoomTaskCountOutputType = {
    preferences: number
  }

  export type RoomTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | RoomTaskCountOutputTypeCountPreferencesArgs
  }

  // Custom InputTypes
  /**
   * RoomTaskCountOutputType without action
   */
  export type RoomTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskCountOutputType
     */
    select?: RoomTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTaskCountOutputType without action
   */
  export type RoomTaskCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskPreferenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    workLoad: number | null
  }

  export type UserSumAggregateOutputType = {
    workLoad: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    workLoad: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roomId: string | null
    workLoad: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    roomId: number
    workLoad: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    workLoad?: true
  }

  export type UserSumAggregateInputType = {
    workLoad?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    workLoad?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    workLoad?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    roomId?: true
    workLoad?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    roomId: string | null
    workLoad: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    workLoad?: boolean
    room?: boolean | User$roomArgs<ExtArgs>
    ownedRoom?: boolean | User$ownedRoomArgs<ExtArgs>
    scheduleBlocks?: boolean | User$scheduleBlocksArgs<ExtArgs>
    createdQuietBlock?: boolean | User$createdQuietBlockArgs<ExtArgs>
    taskPreferences?: boolean | User$taskPreferencesArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomId?: boolean
    workLoad?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "email" | "name" | "createdAt" | "updatedAt" | "roomId" | "workLoad", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | User$roomArgs<ExtArgs>
    ownedRoom?: boolean | User$ownedRoomArgs<ExtArgs>
    scheduleBlocks?: boolean | User$scheduleBlocksArgs<ExtArgs>
    createdQuietBlock?: boolean | User$createdQuietBlockArgs<ExtArgs>
    taskPreferences?: boolean | User$taskPreferencesArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs> | null
      ownedRoom: Prisma.$RoomPayload<ExtArgs> | null
      scheduleBlocks: Prisma.$ScheduleBlockPayload<ExtArgs>[]
      createdQuietBlock: Prisma.$RoomQuietBlockPayload<ExtArgs>[]
      taskPreferences: Prisma.$TaskPreferencePayload<ExtArgs>[]
      assignedTasks: Prisma.$AssignedTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      roomId: string | null
      workLoad: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends User$roomArgs<ExtArgs> = {}>(args?: Subset<T, User$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ownedRoom<T extends User$ownedRoomArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedRoomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scheduleBlocks<T extends User$scheduleBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$scheduleBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdQuietBlock<T extends User$createdQuietBlockArgs<ExtArgs> = {}>(args?: Subset<T, User$createdQuietBlockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskPreferences<T extends User$taskPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$taskPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly roomId: FieldRef<"User", 'String'>
    readonly workLoad: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.room
   */
  export type User$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * User.ownedRoom
   */
  export type User$ownedRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * User.scheduleBlocks
   */
  export type User$scheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    cursor?: ScheduleBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * User.createdQuietBlock
   */
  export type User$createdQuietBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    where?: RoomQuietBlockWhereInput
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    cursor?: RoomQuietBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomQuietBlockScalarFieldEnum | RoomQuietBlockScalarFieldEnum[]
  }

  /**
   * User.taskPreferences
   */
  export type User$taskPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    where?: TaskPreferenceWhereInput
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    cursor?: TaskPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskPreferenceScalarFieldEnum | TaskPreferenceScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    where?: AssignedTaskWhereInput
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    cursor?: AssignedTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTaskScalarFieldEnum | AssignedTaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    inviteCode: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    inviteCode: string
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Room$participantsArgs<ExtArgs>
    quietTimeBlocks?: boolean | Room$quietTimeBlocksArgs<ExtArgs>
    RoomTasks?: boolean | Room$RoomTasksArgs<ExtArgs>
    assignedTasks?: boolean | Room$assignedTasksArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "inviteCode" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Room$participantsArgs<ExtArgs>
    quietTimeBlocks?: boolean | Room$quietTimeBlocksArgs<ExtArgs>
    RoomTasks?: boolean | Room$RoomTasksArgs<ExtArgs>
    assignedTasks?: boolean | Room$assignedTasksArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$UserPayload<ExtArgs>[]
      quietTimeBlocks: Prisma.$RoomQuietBlockPayload<ExtArgs>[]
      RoomTasks: Prisma.$RoomTaskPayload<ExtArgs>[]
      assignedTasks: Prisma.$AssignedTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      inviteCode: string
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Room$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Room$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quietTimeBlocks<T extends Room$quietTimeBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Room$quietTimeBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RoomTasks<T extends Room$RoomTasksArgs<ExtArgs> = {}>(args?: Subset<T, Room$RoomTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends Room$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, Room$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly inviteCode: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
    readonly ownerId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.participants
   */
  export type Room$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Room.quietTimeBlocks
   */
  export type Room$quietTimeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    where?: RoomQuietBlockWhereInput
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    cursor?: RoomQuietBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomQuietBlockScalarFieldEnum | RoomQuietBlockScalarFieldEnum[]
  }

  /**
   * Room.RoomTasks
   */
  export type Room$RoomTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    where?: RoomTaskWhereInput
    orderBy?: RoomTaskOrderByWithRelationInput | RoomTaskOrderByWithRelationInput[]
    cursor?: RoomTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTaskScalarFieldEnum | RoomTaskScalarFieldEnum[]
  }

  /**
   * Room.assignedTasks
   */
  export type Room$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    where?: AssignedTaskWhereInput
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    cursor?: AssignedTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTaskScalarFieldEnum | AssignedTaskScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleBlock
   */

  export type AggregateScheduleBlock = {
    _count: ScheduleBlockCountAggregateOutputType | null
    _avg: ScheduleBlockAvgAggregateOutputType | null
    _sum: ScheduleBlockSumAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  export type ScheduleBlockAvgAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type ScheduleBlockSumAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type ScheduleBlockMinAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    type: $Enums.TimeBlockType | null
    startTime: number | null
    endTime: number | null
    userId: string | null
  }

  export type ScheduleBlockMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    type: $Enums.TimeBlockType | null
    startTime: number | null
    endTime: number | null
    userId: string | null
  }

  export type ScheduleBlockCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    type: number
    startTime: number
    endTime: number
    userId: number
    _all: number
  }


  export type ScheduleBlockAvgAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type ScheduleBlockSumAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type ScheduleBlockMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    type?: true
    startTime?: true
    endTime?: true
    userId?: true
  }

  export type ScheduleBlockMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    type?: true
    startTime?: true
    endTime?: true
    userId?: true
  }

  export type ScheduleBlockCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    type?: true
    startTime?: true
    endTime?: true
    userId?: true
    _all?: true
  }

  export type ScheduleBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlock to aggregate.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleBlocks
    **/
    _count?: true | ScheduleBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type GetScheduleBlockAggregateType<T extends ScheduleBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleBlock[P]>
      : GetScalarType<T[P], AggregateScheduleBlock[P]>
  }




  export type ScheduleBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithAggregationInput | ScheduleBlockOrderByWithAggregationInput[]
    by: ScheduleBlockScalarFieldEnum[] | ScheduleBlockScalarFieldEnum
    having?: ScheduleBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleBlockCountAggregateInputType | true
    _avg?: ScheduleBlockAvgAggregateInputType
    _sum?: ScheduleBlockSumAggregateInputType
    _min?: ScheduleBlockMinAggregateInputType
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type ScheduleBlockGroupByOutputType = {
    id: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
    userId: string
    _count: ScheduleBlockCountAggregateOutputType | null
    _avg: ScheduleBlockAvgAggregateOutputType | null
    _sum: ScheduleBlockSumAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  type GetScheduleBlockGroupByPayload<T extends ScheduleBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleBlock"]>



  export type ScheduleBlockSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    userId?: boolean
  }

  export type ScheduleBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "type" | "startTime" | "endTime" | "userId", ExtArgs["result"]["scheduleBlock"]>
  export type ScheduleBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScheduleBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: $Enums.DayOfWeek
      type: $Enums.TimeBlockType
      startTime: number
      endTime: number
      userId: string
    }, ExtArgs["result"]["scheduleBlock"]>
    composites: {}
  }

  type ScheduleBlockGetPayload<S extends boolean | null | undefined | ScheduleBlockDefaultArgs> = $Result.GetResult<Prisma.$ScheduleBlockPayload, S>

  type ScheduleBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleBlockCountAggregateInputType | true
    }

  export interface ScheduleBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleBlock'], meta: { name: 'ScheduleBlock' } }
    /**
     * Find zero or one ScheduleBlock that matches the filter.
     * @param {ScheduleBlockFindUniqueArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleBlockFindUniqueArgs>(args: SelectSubset<T, ScheduleBlockFindUniqueArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleBlockFindUniqueOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleBlockFindFirstArgs>(args?: SelectSubset<T, ScheduleBlockFindFirstArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany()
     * 
     * // Get first 10 ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleBlockFindManyArgs>(args?: SelectSubset<T, ScheduleBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleBlock.
     * @param {ScheduleBlockCreateArgs} args - Arguments to create a ScheduleBlock.
     * @example
     * // Create one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.create({
     *   data: {
     *     // ... data to create a ScheduleBlock
     *   }
     * })
     * 
     */
    create<T extends ScheduleBlockCreateArgs>(args: SelectSubset<T, ScheduleBlockCreateArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleBlocks.
     * @param {ScheduleBlockCreateManyArgs} args - Arguments to create many ScheduleBlocks.
     * @example
     * // Create many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleBlockCreateManyArgs>(args?: SelectSubset<T, ScheduleBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduleBlock.
     * @param {ScheduleBlockDeleteArgs} args - Arguments to delete one ScheduleBlock.
     * @example
     * // Delete one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.delete({
     *   where: {
     *     // ... filter to delete one ScheduleBlock
     *   }
     * })
     * 
     */
    delete<T extends ScheduleBlockDeleteArgs>(args: SelectSubset<T, ScheduleBlockDeleteArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleBlock.
     * @param {ScheduleBlockUpdateArgs} args - Arguments to update one ScheduleBlock.
     * @example
     * // Update one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleBlockUpdateArgs>(args: SelectSubset<T, ScheduleBlockUpdateArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleBlocks.
     * @param {ScheduleBlockDeleteManyArgs} args - Arguments to filter ScheduleBlocks to delete.
     * @example
     * // Delete a few ScheduleBlocks
     * const { count } = await prisma.scheduleBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleBlockDeleteManyArgs>(args?: SelectSubset<T, ScheduleBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleBlockUpdateManyArgs>(args: SelectSubset<T, ScheduleBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleBlock.
     * @param {ScheduleBlockUpsertArgs} args - Arguments to update or create a ScheduleBlock.
     * @example
     * // Update or create a ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.upsert({
     *   create: {
     *     // ... data to create a ScheduleBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleBlock we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleBlockUpsertArgs>(args: SelectSubset<T, ScheduleBlockUpsertArgs<ExtArgs>>): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockCountArgs} args - Arguments to filter ScheduleBlocks to count.
     * @example
     * // Count the number of ScheduleBlocks
     * const count = await prisma.scheduleBlock.count({
     *   where: {
     *     // ... the filter for the ScheduleBlocks we want to count
     *   }
     * })
    **/
    count<T extends ScheduleBlockCountArgs>(
      args?: Subset<T, ScheduleBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleBlockAggregateArgs>(args: Subset<T, ScheduleBlockAggregateArgs>): Prisma.PrismaPromise<GetScheduleBlockAggregateType<T>>

    /**
     * Group by ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleBlockGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleBlock model
   */
  readonly fields: ScheduleBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleBlock model
   */
  interface ScheduleBlockFieldRefs {
    readonly id: FieldRef<"ScheduleBlock", 'String'>
    readonly dayOfWeek: FieldRef<"ScheduleBlock", 'DayOfWeek'>
    readonly type: FieldRef<"ScheduleBlock", 'TimeBlockType'>
    readonly startTime: FieldRef<"ScheduleBlock", 'Int'>
    readonly endTime: FieldRef<"ScheduleBlock", 'Int'>
    readonly userId: FieldRef<"ScheduleBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleBlock findUnique
   */
  export type ScheduleBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findUniqueOrThrow
   */
  export type ScheduleBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findFirst
   */
  export type ScheduleBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findFirstOrThrow
   */
  export type ScheduleBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findMany
   */
  export type ScheduleBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlocks to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock create
   */
  export type ScheduleBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleBlock.
     */
    data: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
  }

  /**
   * ScheduleBlock createMany
   */
  export type ScheduleBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleBlocks.
     */
    data: ScheduleBlockCreateManyInput | ScheduleBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleBlock update
   */
  export type ScheduleBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleBlock.
     */
    data: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
    /**
     * Choose, which ScheduleBlock to update.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock updateMany
   */
  export type ScheduleBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleBlocks.
     */
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleBlocks to update
     */
    where?: ScheduleBlockWhereInput
    /**
     * Limit how many ScheduleBlocks to update.
     */
    limit?: number
  }

  /**
   * ScheduleBlock upsert
   */
  export type ScheduleBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleBlock to update in case it exists.
     */
    where: ScheduleBlockWhereUniqueInput
    /**
     * In case the ScheduleBlock found by the `where` argument doesn't exist, create a new ScheduleBlock with this data.
     */
    create: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
    /**
     * In case the ScheduleBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
  }

  /**
   * ScheduleBlock delete
   */
  export type ScheduleBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter which ScheduleBlock to delete.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock deleteMany
   */
  export type ScheduleBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlocks to delete
     */
    where?: ScheduleBlockWhereInput
    /**
     * Limit how many ScheduleBlocks to delete.
     */
    limit?: number
  }

  /**
   * ScheduleBlock without action
   */
  export type ScheduleBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleBlock
     */
    omit?: ScheduleBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
  }


  /**
   * Model RoomQuietBlock
   */

  export type AggregateRoomQuietBlock = {
    _count: RoomQuietBlockCountAggregateOutputType | null
    _avg: RoomQuietBlockAvgAggregateOutputType | null
    _sum: RoomQuietBlockSumAggregateOutputType | null
    _min: RoomQuietBlockMinAggregateOutputType | null
    _max: RoomQuietBlockMaxAggregateOutputType | null
  }

  export type RoomQuietBlockAvgAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type RoomQuietBlockSumAggregateOutputType = {
    startTime: number | null
    endTime: number | null
  }

  export type RoomQuietBlockMinAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: number | null
    endTime: number | null
    roomId: string | null
    setByUserId: string | null
  }

  export type RoomQuietBlockMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: number | null
    endTime: number | null
    roomId: string | null
    setByUserId: string | null
  }

  export type RoomQuietBlockCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    roomId: number
    setByUserId: number
    _all: number
  }


  export type RoomQuietBlockAvgAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type RoomQuietBlockSumAggregateInputType = {
    startTime?: true
    endTime?: true
  }

  export type RoomQuietBlockMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    roomId?: true
    setByUserId?: true
  }

  export type RoomQuietBlockMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    roomId?: true
    setByUserId?: true
  }

  export type RoomQuietBlockCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    roomId?: true
    setByUserId?: true
    _all?: true
  }

  export type RoomQuietBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomQuietBlock to aggregate.
     */
    where?: RoomQuietBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomQuietBlocks to fetch.
     */
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomQuietBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomQuietBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomQuietBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomQuietBlocks
    **/
    _count?: true | RoomQuietBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomQuietBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomQuietBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomQuietBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomQuietBlockMaxAggregateInputType
  }

  export type GetRoomQuietBlockAggregateType<T extends RoomQuietBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomQuietBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomQuietBlock[P]>
      : GetScalarType<T[P], AggregateRoomQuietBlock[P]>
  }




  export type RoomQuietBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomQuietBlockWhereInput
    orderBy?: RoomQuietBlockOrderByWithAggregationInput | RoomQuietBlockOrderByWithAggregationInput[]
    by: RoomQuietBlockScalarFieldEnum[] | RoomQuietBlockScalarFieldEnum
    having?: RoomQuietBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomQuietBlockCountAggregateInputType | true
    _avg?: RoomQuietBlockAvgAggregateInputType
    _sum?: RoomQuietBlockSumAggregateInputType
    _min?: RoomQuietBlockMinAggregateInputType
    _max?: RoomQuietBlockMaxAggregateInputType
  }

  export type RoomQuietBlockGroupByOutputType = {
    id: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    roomId: string
    setByUserId: string
    _count: RoomQuietBlockCountAggregateOutputType | null
    _avg: RoomQuietBlockAvgAggregateOutputType | null
    _sum: RoomQuietBlockSumAggregateOutputType | null
    _min: RoomQuietBlockMinAggregateOutputType | null
    _max: RoomQuietBlockMaxAggregateOutputType | null
  }

  type GetRoomQuietBlockGroupByPayload<T extends RoomQuietBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomQuietBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomQuietBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomQuietBlockGroupByOutputType[P]>
            : GetScalarType<T[P], RoomQuietBlockGroupByOutputType[P]>
        }
      >
    >


  export type RoomQuietBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    roomId?: boolean
    setByUserId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    setUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomQuietBlock"]>



  export type RoomQuietBlockSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    roomId?: boolean
    setByUserId?: boolean
  }

  export type RoomQuietBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "roomId" | "setByUserId", ExtArgs["result"]["roomQuietBlock"]>
  export type RoomQuietBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    setUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomQuietBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomQuietBlock"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      setUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: $Enums.DayOfWeek
      startTime: number
      endTime: number
      roomId: string
      setByUserId: string
    }, ExtArgs["result"]["roomQuietBlock"]>
    composites: {}
  }

  type RoomQuietBlockGetPayload<S extends boolean | null | undefined | RoomQuietBlockDefaultArgs> = $Result.GetResult<Prisma.$RoomQuietBlockPayload, S>

  type RoomQuietBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomQuietBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomQuietBlockCountAggregateInputType | true
    }

  export interface RoomQuietBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomQuietBlock'], meta: { name: 'RoomQuietBlock' } }
    /**
     * Find zero or one RoomQuietBlock that matches the filter.
     * @param {RoomQuietBlockFindUniqueArgs} args - Arguments to find a RoomQuietBlock
     * @example
     * // Get one RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomQuietBlockFindUniqueArgs>(args: SelectSubset<T, RoomQuietBlockFindUniqueArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomQuietBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomQuietBlockFindUniqueOrThrowArgs} args - Arguments to find a RoomQuietBlock
     * @example
     * // Get one RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomQuietBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomQuietBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomQuietBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockFindFirstArgs} args - Arguments to find a RoomQuietBlock
     * @example
     * // Get one RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomQuietBlockFindFirstArgs>(args?: SelectSubset<T, RoomQuietBlockFindFirstArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomQuietBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockFindFirstOrThrowArgs} args - Arguments to find a RoomQuietBlock
     * @example
     * // Get one RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomQuietBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomQuietBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomQuietBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomQuietBlocks
     * const roomQuietBlocks = await prisma.roomQuietBlock.findMany()
     * 
     * // Get first 10 RoomQuietBlocks
     * const roomQuietBlocks = await prisma.roomQuietBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomQuietBlockWithIdOnly = await prisma.roomQuietBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomQuietBlockFindManyArgs>(args?: SelectSubset<T, RoomQuietBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomQuietBlock.
     * @param {RoomQuietBlockCreateArgs} args - Arguments to create a RoomQuietBlock.
     * @example
     * // Create one RoomQuietBlock
     * const RoomQuietBlock = await prisma.roomQuietBlock.create({
     *   data: {
     *     // ... data to create a RoomQuietBlock
     *   }
     * })
     * 
     */
    create<T extends RoomQuietBlockCreateArgs>(args: SelectSubset<T, RoomQuietBlockCreateArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomQuietBlocks.
     * @param {RoomQuietBlockCreateManyArgs} args - Arguments to create many RoomQuietBlocks.
     * @example
     * // Create many RoomQuietBlocks
     * const roomQuietBlock = await prisma.roomQuietBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomQuietBlockCreateManyArgs>(args?: SelectSubset<T, RoomQuietBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomQuietBlock.
     * @param {RoomQuietBlockDeleteArgs} args - Arguments to delete one RoomQuietBlock.
     * @example
     * // Delete one RoomQuietBlock
     * const RoomQuietBlock = await prisma.roomQuietBlock.delete({
     *   where: {
     *     // ... filter to delete one RoomQuietBlock
     *   }
     * })
     * 
     */
    delete<T extends RoomQuietBlockDeleteArgs>(args: SelectSubset<T, RoomQuietBlockDeleteArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomQuietBlock.
     * @param {RoomQuietBlockUpdateArgs} args - Arguments to update one RoomQuietBlock.
     * @example
     * // Update one RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomQuietBlockUpdateArgs>(args: SelectSubset<T, RoomQuietBlockUpdateArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomQuietBlocks.
     * @param {RoomQuietBlockDeleteManyArgs} args - Arguments to filter RoomQuietBlocks to delete.
     * @example
     * // Delete a few RoomQuietBlocks
     * const { count } = await prisma.roomQuietBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomQuietBlockDeleteManyArgs>(args?: SelectSubset<T, RoomQuietBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomQuietBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomQuietBlocks
     * const roomQuietBlock = await prisma.roomQuietBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomQuietBlockUpdateManyArgs>(args: SelectSubset<T, RoomQuietBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomQuietBlock.
     * @param {RoomQuietBlockUpsertArgs} args - Arguments to update or create a RoomQuietBlock.
     * @example
     * // Update or create a RoomQuietBlock
     * const roomQuietBlock = await prisma.roomQuietBlock.upsert({
     *   create: {
     *     // ... data to create a RoomQuietBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomQuietBlock we want to update
     *   }
     * })
     */
    upsert<T extends RoomQuietBlockUpsertArgs>(args: SelectSubset<T, RoomQuietBlockUpsertArgs<ExtArgs>>): Prisma__RoomQuietBlockClient<$Result.GetResult<Prisma.$RoomQuietBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomQuietBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockCountArgs} args - Arguments to filter RoomQuietBlocks to count.
     * @example
     * // Count the number of RoomQuietBlocks
     * const count = await prisma.roomQuietBlock.count({
     *   where: {
     *     // ... the filter for the RoomQuietBlocks we want to count
     *   }
     * })
    **/
    count<T extends RoomQuietBlockCountArgs>(
      args?: Subset<T, RoomQuietBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomQuietBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomQuietBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomQuietBlockAggregateArgs>(args: Subset<T, RoomQuietBlockAggregateArgs>): Prisma.PrismaPromise<GetRoomQuietBlockAggregateType<T>>

    /**
     * Group by RoomQuietBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomQuietBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomQuietBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomQuietBlockGroupByArgs['orderBy'] }
        : { orderBy?: RoomQuietBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomQuietBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomQuietBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomQuietBlock model
   */
  readonly fields: RoomQuietBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomQuietBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomQuietBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomQuietBlock model
   */
  interface RoomQuietBlockFieldRefs {
    readonly id: FieldRef<"RoomQuietBlock", 'String'>
    readonly dayOfWeek: FieldRef<"RoomQuietBlock", 'DayOfWeek'>
    readonly startTime: FieldRef<"RoomQuietBlock", 'Int'>
    readonly endTime: FieldRef<"RoomQuietBlock", 'Int'>
    readonly roomId: FieldRef<"RoomQuietBlock", 'String'>
    readonly setByUserId: FieldRef<"RoomQuietBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomQuietBlock findUnique
   */
  export type RoomQuietBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomQuietBlock to fetch.
     */
    where: RoomQuietBlockWhereUniqueInput
  }

  /**
   * RoomQuietBlock findUniqueOrThrow
   */
  export type RoomQuietBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomQuietBlock to fetch.
     */
    where: RoomQuietBlockWhereUniqueInput
  }

  /**
   * RoomQuietBlock findFirst
   */
  export type RoomQuietBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomQuietBlock to fetch.
     */
    where?: RoomQuietBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomQuietBlocks to fetch.
     */
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomQuietBlocks.
     */
    cursor?: RoomQuietBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomQuietBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomQuietBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomQuietBlocks.
     */
    distinct?: RoomQuietBlockScalarFieldEnum | RoomQuietBlockScalarFieldEnum[]
  }

  /**
   * RoomQuietBlock findFirstOrThrow
   */
  export type RoomQuietBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomQuietBlock to fetch.
     */
    where?: RoomQuietBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomQuietBlocks to fetch.
     */
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomQuietBlocks.
     */
    cursor?: RoomQuietBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomQuietBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomQuietBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomQuietBlocks.
     */
    distinct?: RoomQuietBlockScalarFieldEnum | RoomQuietBlockScalarFieldEnum[]
  }

  /**
   * RoomQuietBlock findMany
   */
  export type RoomQuietBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomQuietBlocks to fetch.
     */
    where?: RoomQuietBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomQuietBlocks to fetch.
     */
    orderBy?: RoomQuietBlockOrderByWithRelationInput | RoomQuietBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomQuietBlocks.
     */
    cursor?: RoomQuietBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomQuietBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomQuietBlocks.
     */
    skip?: number
    distinct?: RoomQuietBlockScalarFieldEnum | RoomQuietBlockScalarFieldEnum[]
  }

  /**
   * RoomQuietBlock create
   */
  export type RoomQuietBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomQuietBlock.
     */
    data: XOR<RoomQuietBlockCreateInput, RoomQuietBlockUncheckedCreateInput>
  }

  /**
   * RoomQuietBlock createMany
   */
  export type RoomQuietBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomQuietBlocks.
     */
    data: RoomQuietBlockCreateManyInput | RoomQuietBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomQuietBlock update
   */
  export type RoomQuietBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomQuietBlock.
     */
    data: XOR<RoomQuietBlockUpdateInput, RoomQuietBlockUncheckedUpdateInput>
    /**
     * Choose, which RoomQuietBlock to update.
     */
    where: RoomQuietBlockWhereUniqueInput
  }

  /**
   * RoomQuietBlock updateMany
   */
  export type RoomQuietBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomQuietBlocks.
     */
    data: XOR<RoomQuietBlockUpdateManyMutationInput, RoomQuietBlockUncheckedUpdateManyInput>
    /**
     * Filter which RoomQuietBlocks to update
     */
    where?: RoomQuietBlockWhereInput
    /**
     * Limit how many RoomQuietBlocks to update.
     */
    limit?: number
  }

  /**
   * RoomQuietBlock upsert
   */
  export type RoomQuietBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomQuietBlock to update in case it exists.
     */
    where: RoomQuietBlockWhereUniqueInput
    /**
     * In case the RoomQuietBlock found by the `where` argument doesn't exist, create a new RoomQuietBlock with this data.
     */
    create: XOR<RoomQuietBlockCreateInput, RoomQuietBlockUncheckedCreateInput>
    /**
     * In case the RoomQuietBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomQuietBlockUpdateInput, RoomQuietBlockUncheckedUpdateInput>
  }

  /**
   * RoomQuietBlock delete
   */
  export type RoomQuietBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
    /**
     * Filter which RoomQuietBlock to delete.
     */
    where: RoomQuietBlockWhereUniqueInput
  }

  /**
   * RoomQuietBlock deleteMany
   */
  export type RoomQuietBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomQuietBlocks to delete
     */
    where?: RoomQuietBlockWhereInput
    /**
     * Limit how many RoomQuietBlocks to delete.
     */
    limit?: number
  }

  /**
   * RoomQuietBlock without action
   */
  export type RoomQuietBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomQuietBlock
     */
    select?: RoomQuietBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomQuietBlock
     */
    omit?: RoomQuietBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomQuietBlockInclude<ExtArgs> | null
  }


  /**
   * Model RoomTaskTemplate
   */

  export type AggregateRoomTaskTemplate = {
    _count: RoomTaskTemplateCountAggregateOutputType | null
    _avg: RoomTaskTemplateAvgAggregateOutputType | null
    _sum: RoomTaskTemplateSumAggregateOutputType | null
    _min: RoomTaskTemplateMinAggregateOutputType | null
    _max: RoomTaskTemplateMaxAggregateOutputType | null
  }

  export type RoomTaskTemplateAvgAggregateOutputType = {
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskTemplateSumAggregateOutputType = {
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskTemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskTemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskTemplateCountAggregateOutputType = {
    id: number
    title: number
    difficulty: number
    estimatedTime: number
    _all: number
  }


  export type RoomTaskTemplateAvgAggregateInputType = {
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskTemplateSumAggregateInputType = {
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskTemplateMinAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskTemplateCountAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
    _all?: true
  }

  export type RoomTaskTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTaskTemplate to aggregate.
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTaskTemplates to fetch.
     */
    orderBy?: RoomTaskTemplateOrderByWithRelationInput | RoomTaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTaskTemplates
    **/
    _count?: true | RoomTaskTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTaskTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTaskTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTaskTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTaskTemplateMaxAggregateInputType
  }

  export type GetRoomTaskTemplateAggregateType<T extends RoomTaskTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomTaskTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomTaskTemplate[P]>
      : GetScalarType<T[P], AggregateRoomTaskTemplate[P]>
  }




  export type RoomTaskTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTaskTemplateWhereInput
    orderBy?: RoomTaskTemplateOrderByWithAggregationInput | RoomTaskTemplateOrderByWithAggregationInput[]
    by: RoomTaskTemplateScalarFieldEnum[] | RoomTaskTemplateScalarFieldEnum
    having?: RoomTaskTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTaskTemplateCountAggregateInputType | true
    _avg?: RoomTaskTemplateAvgAggregateInputType
    _sum?: RoomTaskTemplateSumAggregateInputType
    _min?: RoomTaskTemplateMinAggregateInputType
    _max?: RoomTaskTemplateMaxAggregateInputType
  }

  export type RoomTaskTemplateGroupByOutputType = {
    id: string
    title: string
    difficulty: number
    estimatedTime: number
    _count: RoomTaskTemplateCountAggregateOutputType | null
    _avg: RoomTaskTemplateAvgAggregateOutputType | null
    _sum: RoomTaskTemplateSumAggregateOutputType | null
    _min: RoomTaskTemplateMinAggregateOutputType | null
    _max: RoomTaskTemplateMaxAggregateOutputType | null
  }

  type GetRoomTaskTemplateGroupByPayload<T extends RoomTaskTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTaskTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTaskTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTaskTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTaskTemplateGroupByOutputType[P]>
        }
      >
    >


  export type RoomTaskTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    difficulty?: boolean
    estimatedTime?: boolean
  }, ExtArgs["result"]["roomTaskTemplate"]>



  export type RoomTaskTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    difficulty?: boolean
    estimatedTime?: boolean
  }

  export type RoomTaskTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "difficulty" | "estimatedTime", ExtArgs["result"]["roomTaskTemplate"]>

  export type $RoomTaskTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomTaskTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      difficulty: number
      estimatedTime: number
    }, ExtArgs["result"]["roomTaskTemplate"]>
    composites: {}
  }

  type RoomTaskTemplateGetPayload<S extends boolean | null | undefined | RoomTaskTemplateDefaultArgs> = $Result.GetResult<Prisma.$RoomTaskTemplatePayload, S>

  type RoomTaskTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTaskTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTaskTemplateCountAggregateInputType | true
    }

  export interface RoomTaskTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomTaskTemplate'], meta: { name: 'RoomTaskTemplate' } }
    /**
     * Find zero or one RoomTaskTemplate that matches the filter.
     * @param {RoomTaskTemplateFindUniqueArgs} args - Arguments to find a RoomTaskTemplate
     * @example
     * // Get one RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTaskTemplateFindUniqueArgs>(args: SelectSubset<T, RoomTaskTemplateFindUniqueArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomTaskTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTaskTemplateFindUniqueOrThrowArgs} args - Arguments to find a RoomTaskTemplate
     * @example
     * // Get one RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTaskTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTaskTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTaskTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateFindFirstArgs} args - Arguments to find a RoomTaskTemplate
     * @example
     * // Get one RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTaskTemplateFindFirstArgs>(args?: SelectSubset<T, RoomTaskTemplateFindFirstArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTaskTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateFindFirstOrThrowArgs} args - Arguments to find a RoomTaskTemplate
     * @example
     * // Get one RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTaskTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTaskTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTaskTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTaskTemplates
     * const roomTaskTemplates = await prisma.roomTaskTemplate.findMany()
     * 
     * // Get first 10 RoomTaskTemplates
     * const roomTaskTemplates = await prisma.roomTaskTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTaskTemplateWithIdOnly = await prisma.roomTaskTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTaskTemplateFindManyArgs>(args?: SelectSubset<T, RoomTaskTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomTaskTemplate.
     * @param {RoomTaskTemplateCreateArgs} args - Arguments to create a RoomTaskTemplate.
     * @example
     * // Create one RoomTaskTemplate
     * const RoomTaskTemplate = await prisma.roomTaskTemplate.create({
     *   data: {
     *     // ... data to create a RoomTaskTemplate
     *   }
     * })
     * 
     */
    create<T extends RoomTaskTemplateCreateArgs>(args: SelectSubset<T, RoomTaskTemplateCreateArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTaskTemplates.
     * @param {RoomTaskTemplateCreateManyArgs} args - Arguments to create many RoomTaskTemplates.
     * @example
     * // Create many RoomTaskTemplates
     * const roomTaskTemplate = await prisma.roomTaskTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTaskTemplateCreateManyArgs>(args?: SelectSubset<T, RoomTaskTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomTaskTemplate.
     * @param {RoomTaskTemplateDeleteArgs} args - Arguments to delete one RoomTaskTemplate.
     * @example
     * // Delete one RoomTaskTemplate
     * const RoomTaskTemplate = await prisma.roomTaskTemplate.delete({
     *   where: {
     *     // ... filter to delete one RoomTaskTemplate
     *   }
     * })
     * 
     */
    delete<T extends RoomTaskTemplateDeleteArgs>(args: SelectSubset<T, RoomTaskTemplateDeleteArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomTaskTemplate.
     * @param {RoomTaskTemplateUpdateArgs} args - Arguments to update one RoomTaskTemplate.
     * @example
     * // Update one RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTaskTemplateUpdateArgs>(args: SelectSubset<T, RoomTaskTemplateUpdateArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTaskTemplates.
     * @param {RoomTaskTemplateDeleteManyArgs} args - Arguments to filter RoomTaskTemplates to delete.
     * @example
     * // Delete a few RoomTaskTemplates
     * const { count } = await prisma.roomTaskTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTaskTemplateDeleteManyArgs>(args?: SelectSubset<T, RoomTaskTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTaskTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTaskTemplates
     * const roomTaskTemplate = await prisma.roomTaskTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTaskTemplateUpdateManyArgs>(args: SelectSubset<T, RoomTaskTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomTaskTemplate.
     * @param {RoomTaskTemplateUpsertArgs} args - Arguments to update or create a RoomTaskTemplate.
     * @example
     * // Update or create a RoomTaskTemplate
     * const roomTaskTemplate = await prisma.roomTaskTemplate.upsert({
     *   create: {
     *     // ... data to create a RoomTaskTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomTaskTemplate we want to update
     *   }
     * })
     */
    upsert<T extends RoomTaskTemplateUpsertArgs>(args: SelectSubset<T, RoomTaskTemplateUpsertArgs<ExtArgs>>): Prisma__RoomTaskTemplateClient<$Result.GetResult<Prisma.$RoomTaskTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTaskTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateCountArgs} args - Arguments to filter RoomTaskTemplates to count.
     * @example
     * // Count the number of RoomTaskTemplates
     * const count = await prisma.roomTaskTemplate.count({
     *   where: {
     *     // ... the filter for the RoomTaskTemplates we want to count
     *   }
     * })
    **/
    count<T extends RoomTaskTemplateCountArgs>(
      args?: Subset<T, RoomTaskTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTaskTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomTaskTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTaskTemplateAggregateArgs>(args: Subset<T, RoomTaskTemplateAggregateArgs>): Prisma.PrismaPromise<GetRoomTaskTemplateAggregateType<T>>

    /**
     * Group by RoomTaskTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTaskTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTaskTemplateGroupByArgs['orderBy'] }
        : { orderBy?: RoomTaskTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTaskTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTaskTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomTaskTemplate model
   */
  readonly fields: RoomTaskTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomTaskTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTaskTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomTaskTemplate model
   */
  interface RoomTaskTemplateFieldRefs {
    readonly id: FieldRef<"RoomTaskTemplate", 'String'>
    readonly title: FieldRef<"RoomTaskTemplate", 'String'>
    readonly difficulty: FieldRef<"RoomTaskTemplate", 'Int'>
    readonly estimatedTime: FieldRef<"RoomTaskTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoomTaskTemplate findUnique
   */
  export type RoomTaskTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter, which RoomTaskTemplate to fetch.
     */
    where: RoomTaskTemplateWhereUniqueInput
  }

  /**
   * RoomTaskTemplate findUniqueOrThrow
   */
  export type RoomTaskTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter, which RoomTaskTemplate to fetch.
     */
    where: RoomTaskTemplateWhereUniqueInput
  }

  /**
   * RoomTaskTemplate findFirst
   */
  export type RoomTaskTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter, which RoomTaskTemplate to fetch.
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTaskTemplates to fetch.
     */
    orderBy?: RoomTaskTemplateOrderByWithRelationInput | RoomTaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTaskTemplates.
     */
    cursor?: RoomTaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTaskTemplates.
     */
    distinct?: RoomTaskTemplateScalarFieldEnum | RoomTaskTemplateScalarFieldEnum[]
  }

  /**
   * RoomTaskTemplate findFirstOrThrow
   */
  export type RoomTaskTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter, which RoomTaskTemplate to fetch.
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTaskTemplates to fetch.
     */
    orderBy?: RoomTaskTemplateOrderByWithRelationInput | RoomTaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTaskTemplates.
     */
    cursor?: RoomTaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTaskTemplates.
     */
    distinct?: RoomTaskTemplateScalarFieldEnum | RoomTaskTemplateScalarFieldEnum[]
  }

  /**
   * RoomTaskTemplate findMany
   */
  export type RoomTaskTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter, which RoomTaskTemplates to fetch.
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTaskTemplates to fetch.
     */
    orderBy?: RoomTaskTemplateOrderByWithRelationInput | RoomTaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTaskTemplates.
     */
    cursor?: RoomTaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTaskTemplates.
     */
    skip?: number
    distinct?: RoomTaskTemplateScalarFieldEnum | RoomTaskTemplateScalarFieldEnum[]
  }

  /**
   * RoomTaskTemplate create
   */
  export type RoomTaskTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a RoomTaskTemplate.
     */
    data: XOR<RoomTaskTemplateCreateInput, RoomTaskTemplateUncheckedCreateInput>
  }

  /**
   * RoomTaskTemplate createMany
   */
  export type RoomTaskTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTaskTemplates.
     */
    data: RoomTaskTemplateCreateManyInput | RoomTaskTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomTaskTemplate update
   */
  export type RoomTaskTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a RoomTaskTemplate.
     */
    data: XOR<RoomTaskTemplateUpdateInput, RoomTaskTemplateUncheckedUpdateInput>
    /**
     * Choose, which RoomTaskTemplate to update.
     */
    where: RoomTaskTemplateWhereUniqueInput
  }

  /**
   * RoomTaskTemplate updateMany
   */
  export type RoomTaskTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTaskTemplates.
     */
    data: XOR<RoomTaskTemplateUpdateManyMutationInput, RoomTaskTemplateUncheckedUpdateManyInput>
    /**
     * Filter which RoomTaskTemplates to update
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * Limit how many RoomTaskTemplates to update.
     */
    limit?: number
  }

  /**
   * RoomTaskTemplate upsert
   */
  export type RoomTaskTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the RoomTaskTemplate to update in case it exists.
     */
    where: RoomTaskTemplateWhereUniqueInput
    /**
     * In case the RoomTaskTemplate found by the `where` argument doesn't exist, create a new RoomTaskTemplate with this data.
     */
    create: XOR<RoomTaskTemplateCreateInput, RoomTaskTemplateUncheckedCreateInput>
    /**
     * In case the RoomTaskTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTaskTemplateUpdateInput, RoomTaskTemplateUncheckedUpdateInput>
  }

  /**
   * RoomTaskTemplate delete
   */
  export type RoomTaskTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
    /**
     * Filter which RoomTaskTemplate to delete.
     */
    where: RoomTaskTemplateWhereUniqueInput
  }

  /**
   * RoomTaskTemplate deleteMany
   */
  export type RoomTaskTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTaskTemplates to delete
     */
    where?: RoomTaskTemplateWhereInput
    /**
     * Limit how many RoomTaskTemplates to delete.
     */
    limit?: number
  }

  /**
   * RoomTaskTemplate without action
   */
  export type RoomTaskTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTaskTemplate
     */
    select?: RoomTaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTaskTemplate
     */
    omit?: RoomTaskTemplateOmit<ExtArgs> | null
  }


  /**
   * Model RoomTask
   */

  export type AggregateRoomTask = {
    _count: RoomTaskCountAggregateOutputType | null
    _avg: RoomTaskAvgAggregateOutputType | null
    _sum: RoomTaskSumAggregateOutputType | null
    _min: RoomTaskMinAggregateOutputType | null
    _max: RoomTaskMaxAggregateOutputType | null
  }

  export type RoomTaskAvgAggregateOutputType = {
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskSumAggregateOutputType = {
    difficulty: number | null
    estimatedTime: number | null
  }

  export type RoomTaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: number | null
    estimatedTime: number | null
    roomId: string | null
  }

  export type RoomTaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: number | null
    estimatedTime: number | null
    roomId: string | null
  }

  export type RoomTaskCountAggregateOutputType = {
    id: number
    title: number
    difficulty: number
    estimatedTime: number
    roomId: number
    _all: number
  }


  export type RoomTaskAvgAggregateInputType = {
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskSumAggregateInputType = {
    difficulty?: true
    estimatedTime?: true
  }

  export type RoomTaskMinAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
    roomId?: true
  }

  export type RoomTaskMaxAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
    roomId?: true
  }

  export type RoomTaskCountAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    estimatedTime?: true
    roomId?: true
    _all?: true
  }

  export type RoomTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTask to aggregate.
     */
    where?: RoomTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTasks to fetch.
     */
    orderBy?: RoomTaskOrderByWithRelationInput | RoomTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTasks
    **/
    _count?: true | RoomTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTaskMaxAggregateInputType
  }

  export type GetRoomTaskAggregateType<T extends RoomTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomTask[P]>
      : GetScalarType<T[P], AggregateRoomTask[P]>
  }




  export type RoomTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTaskWhereInput
    orderBy?: RoomTaskOrderByWithAggregationInput | RoomTaskOrderByWithAggregationInput[]
    by: RoomTaskScalarFieldEnum[] | RoomTaskScalarFieldEnum
    having?: RoomTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTaskCountAggregateInputType | true
    _avg?: RoomTaskAvgAggregateInputType
    _sum?: RoomTaskSumAggregateInputType
    _min?: RoomTaskMinAggregateInputType
    _max?: RoomTaskMaxAggregateInputType
  }

  export type RoomTaskGroupByOutputType = {
    id: string
    title: string
    difficulty: number
    estimatedTime: number
    roomId: string
    _count: RoomTaskCountAggregateOutputType | null
    _avg: RoomTaskAvgAggregateOutputType | null
    _sum: RoomTaskSumAggregateOutputType | null
    _min: RoomTaskMinAggregateOutputType | null
    _max: RoomTaskMaxAggregateOutputType | null
  }

  type GetRoomTaskGroupByPayload<T extends RoomTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTaskGroupByOutputType[P]>
        }
      >
    >


  export type RoomTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    difficulty?: boolean
    estimatedTime?: boolean
    roomId?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    preferences?: boolean | RoomTask$preferencesArgs<ExtArgs>
    assignedTask?: boolean | RoomTask$assignedTaskArgs<ExtArgs>
    _count?: boolean | RoomTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTask"]>



  export type RoomTaskSelectScalar = {
    id?: boolean
    title?: boolean
    difficulty?: boolean
    estimatedTime?: boolean
    roomId?: boolean
  }

  export type RoomTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "difficulty" | "estimatedTime" | "roomId", ExtArgs["result"]["roomTask"]>
  export type RoomTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    preferences?: boolean | RoomTask$preferencesArgs<ExtArgs>
    assignedTask?: boolean | RoomTask$assignedTaskArgs<ExtArgs>
    _count?: boolean | RoomTaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomTask"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      preferences: Prisma.$TaskPreferencePayload<ExtArgs>[]
      assignedTask: Prisma.$AssignedTaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      difficulty: number
      estimatedTime: number
      roomId: string
    }, ExtArgs["result"]["roomTask"]>
    composites: {}
  }

  type RoomTaskGetPayload<S extends boolean | null | undefined | RoomTaskDefaultArgs> = $Result.GetResult<Prisma.$RoomTaskPayload, S>

  type RoomTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTaskCountAggregateInputType | true
    }

  export interface RoomTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomTask'], meta: { name: 'RoomTask' } }
    /**
     * Find zero or one RoomTask that matches the filter.
     * @param {RoomTaskFindUniqueArgs} args - Arguments to find a RoomTask
     * @example
     * // Get one RoomTask
     * const roomTask = await prisma.roomTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTaskFindUniqueArgs>(args: SelectSubset<T, RoomTaskFindUniqueArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTaskFindUniqueOrThrowArgs} args - Arguments to find a RoomTask
     * @example
     * // Get one RoomTask
     * const roomTask = await prisma.roomTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskFindFirstArgs} args - Arguments to find a RoomTask
     * @example
     * // Get one RoomTask
     * const roomTask = await prisma.roomTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTaskFindFirstArgs>(args?: SelectSubset<T, RoomTaskFindFirstArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskFindFirstOrThrowArgs} args - Arguments to find a RoomTask
     * @example
     * // Get one RoomTask
     * const roomTask = await prisma.roomTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTasks
     * const roomTasks = await prisma.roomTask.findMany()
     * 
     * // Get first 10 RoomTasks
     * const roomTasks = await prisma.roomTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTaskWithIdOnly = await prisma.roomTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTaskFindManyArgs>(args?: SelectSubset<T, RoomTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomTask.
     * @param {RoomTaskCreateArgs} args - Arguments to create a RoomTask.
     * @example
     * // Create one RoomTask
     * const RoomTask = await prisma.roomTask.create({
     *   data: {
     *     // ... data to create a RoomTask
     *   }
     * })
     * 
     */
    create<T extends RoomTaskCreateArgs>(args: SelectSubset<T, RoomTaskCreateArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTasks.
     * @param {RoomTaskCreateManyArgs} args - Arguments to create many RoomTasks.
     * @example
     * // Create many RoomTasks
     * const roomTask = await prisma.roomTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTaskCreateManyArgs>(args?: SelectSubset<T, RoomTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomTask.
     * @param {RoomTaskDeleteArgs} args - Arguments to delete one RoomTask.
     * @example
     * // Delete one RoomTask
     * const RoomTask = await prisma.roomTask.delete({
     *   where: {
     *     // ... filter to delete one RoomTask
     *   }
     * })
     * 
     */
    delete<T extends RoomTaskDeleteArgs>(args: SelectSubset<T, RoomTaskDeleteArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomTask.
     * @param {RoomTaskUpdateArgs} args - Arguments to update one RoomTask.
     * @example
     * // Update one RoomTask
     * const roomTask = await prisma.roomTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTaskUpdateArgs>(args: SelectSubset<T, RoomTaskUpdateArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTasks.
     * @param {RoomTaskDeleteManyArgs} args - Arguments to filter RoomTasks to delete.
     * @example
     * // Delete a few RoomTasks
     * const { count } = await prisma.roomTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTaskDeleteManyArgs>(args?: SelectSubset<T, RoomTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTasks
     * const roomTask = await prisma.roomTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTaskUpdateManyArgs>(args: SelectSubset<T, RoomTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomTask.
     * @param {RoomTaskUpsertArgs} args - Arguments to update or create a RoomTask.
     * @example
     * // Update or create a RoomTask
     * const roomTask = await prisma.roomTask.upsert({
     *   create: {
     *     // ... data to create a RoomTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomTask we want to update
     *   }
     * })
     */
    upsert<T extends RoomTaskUpsertArgs>(args: SelectSubset<T, RoomTaskUpsertArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskCountArgs} args - Arguments to filter RoomTasks to count.
     * @example
     * // Count the number of RoomTasks
     * const count = await prisma.roomTask.count({
     *   where: {
     *     // ... the filter for the RoomTasks we want to count
     *   }
     * })
    **/
    count<T extends RoomTaskCountArgs>(
      args?: Subset<T, RoomTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTaskAggregateArgs>(args: Subset<T, RoomTaskAggregateArgs>): Prisma.PrismaPromise<GetRoomTaskAggregateType<T>>

    /**
     * Group by RoomTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTaskGroupByArgs['orderBy'] }
        : { orderBy?: RoomTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomTask model
   */
  readonly fields: RoomTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preferences<T extends RoomTask$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, RoomTask$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTask<T extends RoomTask$assignedTaskArgs<ExtArgs> = {}>(args?: Subset<T, RoomTask$assignedTaskArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomTask model
   */
  interface RoomTaskFieldRefs {
    readonly id: FieldRef<"RoomTask", 'String'>
    readonly title: FieldRef<"RoomTask", 'String'>
    readonly difficulty: FieldRef<"RoomTask", 'Int'>
    readonly estimatedTime: FieldRef<"RoomTask", 'Int'>
    readonly roomId: FieldRef<"RoomTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomTask findUnique
   */
  export type RoomTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoomTask to fetch.
     */
    where: RoomTaskWhereUniqueInput
  }

  /**
   * RoomTask findUniqueOrThrow
   */
  export type RoomTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoomTask to fetch.
     */
    where: RoomTaskWhereUniqueInput
  }

  /**
   * RoomTask findFirst
   */
  export type RoomTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoomTask to fetch.
     */
    where?: RoomTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTasks to fetch.
     */
    orderBy?: RoomTaskOrderByWithRelationInput | RoomTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTasks.
     */
    cursor?: RoomTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTasks.
     */
    distinct?: RoomTaskScalarFieldEnum | RoomTaskScalarFieldEnum[]
  }

  /**
   * RoomTask findFirstOrThrow
   */
  export type RoomTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoomTask to fetch.
     */
    where?: RoomTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTasks to fetch.
     */
    orderBy?: RoomTaskOrderByWithRelationInput | RoomTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTasks.
     */
    cursor?: RoomTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTasks.
     */
    distinct?: RoomTaskScalarFieldEnum | RoomTaskScalarFieldEnum[]
  }

  /**
   * RoomTask findMany
   */
  export type RoomTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoomTasks to fetch.
     */
    where?: RoomTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTasks to fetch.
     */
    orderBy?: RoomTaskOrderByWithRelationInput | RoomTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTasks.
     */
    cursor?: RoomTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTasks.
     */
    skip?: number
    distinct?: RoomTaskScalarFieldEnum | RoomTaskScalarFieldEnum[]
  }

  /**
   * RoomTask create
   */
  export type RoomTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomTask.
     */
    data: XOR<RoomTaskCreateInput, RoomTaskUncheckedCreateInput>
  }

  /**
   * RoomTask createMany
   */
  export type RoomTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTasks.
     */
    data: RoomTaskCreateManyInput | RoomTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomTask update
   */
  export type RoomTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomTask.
     */
    data: XOR<RoomTaskUpdateInput, RoomTaskUncheckedUpdateInput>
    /**
     * Choose, which RoomTask to update.
     */
    where: RoomTaskWhereUniqueInput
  }

  /**
   * RoomTask updateMany
   */
  export type RoomTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTasks.
     */
    data: XOR<RoomTaskUpdateManyMutationInput, RoomTaskUncheckedUpdateManyInput>
    /**
     * Filter which RoomTasks to update
     */
    where?: RoomTaskWhereInput
    /**
     * Limit how many RoomTasks to update.
     */
    limit?: number
  }

  /**
   * RoomTask upsert
   */
  export type RoomTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomTask to update in case it exists.
     */
    where: RoomTaskWhereUniqueInput
    /**
     * In case the RoomTask found by the `where` argument doesn't exist, create a new RoomTask with this data.
     */
    create: XOR<RoomTaskCreateInput, RoomTaskUncheckedCreateInput>
    /**
     * In case the RoomTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTaskUpdateInput, RoomTaskUncheckedUpdateInput>
  }

  /**
   * RoomTask delete
   */
  export type RoomTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
    /**
     * Filter which RoomTask to delete.
     */
    where: RoomTaskWhereUniqueInput
  }

  /**
   * RoomTask deleteMany
   */
  export type RoomTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTasks to delete
     */
    where?: RoomTaskWhereInput
    /**
     * Limit how many RoomTasks to delete.
     */
    limit?: number
  }

  /**
   * RoomTask.preferences
   */
  export type RoomTask$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    where?: TaskPreferenceWhereInput
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    cursor?: TaskPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskPreferenceScalarFieldEnum | TaskPreferenceScalarFieldEnum[]
  }

  /**
   * RoomTask.assignedTask
   */
  export type RoomTask$assignedTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    where?: AssignedTaskWhereInput
  }

  /**
   * RoomTask without action
   */
  export type RoomTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTask
     */
    select?: RoomTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTask
     */
    omit?: RoomTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskPreference
   */

  export type AggregateTaskPreference = {
    _count: TaskPreferenceCountAggregateOutputType | null
    _avg: TaskPreferenceAvgAggregateOutputType | null
    _sum: TaskPreferenceSumAggregateOutputType | null
    _min: TaskPreferenceMinAggregateOutputType | null
    _max: TaskPreferenceMaxAggregateOutputType | null
  }

  export type TaskPreferenceAvgAggregateOutputType = {
    priority: number | null
  }

  export type TaskPreferenceSumAggregateOutputType = {
    priority: number | null
  }

  export type TaskPreferenceMinAggregateOutputType = {
    id: string | null
    priority: number | null
    userId: string | null
    taskId: string | null
  }

  export type TaskPreferenceMaxAggregateOutputType = {
    id: string | null
    priority: number | null
    userId: string | null
    taskId: string | null
  }

  export type TaskPreferenceCountAggregateOutputType = {
    id: number
    priority: number
    userId: number
    taskId: number
    _all: number
  }


  export type TaskPreferenceAvgAggregateInputType = {
    priority?: true
  }

  export type TaskPreferenceSumAggregateInputType = {
    priority?: true
  }

  export type TaskPreferenceMinAggregateInputType = {
    id?: true
    priority?: true
    userId?: true
    taskId?: true
  }

  export type TaskPreferenceMaxAggregateInputType = {
    id?: true
    priority?: true
    userId?: true
    taskId?: true
  }

  export type TaskPreferenceCountAggregateInputType = {
    id?: true
    priority?: true
    userId?: true
    taskId?: true
    _all?: true
  }

  export type TaskPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPreference to aggregate.
     */
    where?: TaskPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPreferences to fetch.
     */
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskPreferences
    **/
    _count?: true | TaskPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskPreferenceMaxAggregateInputType
  }

  export type GetTaskPreferenceAggregateType<T extends TaskPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskPreference[P]>
      : GetScalarType<T[P], AggregateTaskPreference[P]>
  }




  export type TaskPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskPreferenceWhereInput
    orderBy?: TaskPreferenceOrderByWithAggregationInput | TaskPreferenceOrderByWithAggregationInput[]
    by: TaskPreferenceScalarFieldEnum[] | TaskPreferenceScalarFieldEnum
    having?: TaskPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskPreferenceCountAggregateInputType | true
    _avg?: TaskPreferenceAvgAggregateInputType
    _sum?: TaskPreferenceSumAggregateInputType
    _min?: TaskPreferenceMinAggregateInputType
    _max?: TaskPreferenceMaxAggregateInputType
  }

  export type TaskPreferenceGroupByOutputType = {
    id: string
    priority: number
    userId: string
    taskId: string
    _count: TaskPreferenceCountAggregateOutputType | null
    _avg: TaskPreferenceAvgAggregateOutputType | null
    _sum: TaskPreferenceSumAggregateOutputType | null
    _min: TaskPreferenceMinAggregateOutputType | null
    _max: TaskPreferenceMaxAggregateOutputType | null
  }

  type GetTaskPreferenceGroupByPayload<T extends TaskPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], TaskPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type TaskPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | RoomTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskPreference"]>



  export type TaskPreferenceSelectScalar = {
    id?: boolean
    priority?: boolean
    userId?: boolean
    taskId?: boolean
  }

  export type TaskPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "priority" | "userId" | "taskId", ExtArgs["result"]["taskPreference"]>
  export type TaskPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | RoomTaskDefaultArgs<ExtArgs>
  }

  export type $TaskPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$RoomTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      priority: number
      userId: string
      taskId: string
    }, ExtArgs["result"]["taskPreference"]>
    composites: {}
  }

  type TaskPreferenceGetPayload<S extends boolean | null | undefined | TaskPreferenceDefaultArgs> = $Result.GetResult<Prisma.$TaskPreferencePayload, S>

  type TaskPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskPreferenceCountAggregateInputType | true
    }

  export interface TaskPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskPreference'], meta: { name: 'TaskPreference' } }
    /**
     * Find zero or one TaskPreference that matches the filter.
     * @param {TaskPreferenceFindUniqueArgs} args - Arguments to find a TaskPreference
     * @example
     * // Get one TaskPreference
     * const taskPreference = await prisma.taskPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskPreferenceFindUniqueArgs>(args: SelectSubset<T, TaskPreferenceFindUniqueArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskPreferenceFindUniqueOrThrowArgs} args - Arguments to find a TaskPreference
     * @example
     * // Get one TaskPreference
     * const taskPreference = await prisma.taskPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceFindFirstArgs} args - Arguments to find a TaskPreference
     * @example
     * // Get one TaskPreference
     * const taskPreference = await prisma.taskPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskPreferenceFindFirstArgs>(args?: SelectSubset<T, TaskPreferenceFindFirstArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceFindFirstOrThrowArgs} args - Arguments to find a TaskPreference
     * @example
     * // Get one TaskPreference
     * const taskPreference = await prisma.taskPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskPreferences
     * const taskPreferences = await prisma.taskPreference.findMany()
     * 
     * // Get first 10 TaskPreferences
     * const taskPreferences = await prisma.taskPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskPreferenceWithIdOnly = await prisma.taskPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskPreferenceFindManyArgs>(args?: SelectSubset<T, TaskPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskPreference.
     * @param {TaskPreferenceCreateArgs} args - Arguments to create a TaskPreference.
     * @example
     * // Create one TaskPreference
     * const TaskPreference = await prisma.taskPreference.create({
     *   data: {
     *     // ... data to create a TaskPreference
     *   }
     * })
     * 
     */
    create<T extends TaskPreferenceCreateArgs>(args: SelectSubset<T, TaskPreferenceCreateArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskPreferences.
     * @param {TaskPreferenceCreateManyArgs} args - Arguments to create many TaskPreferences.
     * @example
     * // Create many TaskPreferences
     * const taskPreference = await prisma.taskPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskPreferenceCreateManyArgs>(args?: SelectSubset<T, TaskPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskPreference.
     * @param {TaskPreferenceDeleteArgs} args - Arguments to delete one TaskPreference.
     * @example
     * // Delete one TaskPreference
     * const TaskPreference = await prisma.taskPreference.delete({
     *   where: {
     *     // ... filter to delete one TaskPreference
     *   }
     * })
     * 
     */
    delete<T extends TaskPreferenceDeleteArgs>(args: SelectSubset<T, TaskPreferenceDeleteArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskPreference.
     * @param {TaskPreferenceUpdateArgs} args - Arguments to update one TaskPreference.
     * @example
     * // Update one TaskPreference
     * const taskPreference = await prisma.taskPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskPreferenceUpdateArgs>(args: SelectSubset<T, TaskPreferenceUpdateArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskPreferences.
     * @param {TaskPreferenceDeleteManyArgs} args - Arguments to filter TaskPreferences to delete.
     * @example
     * // Delete a few TaskPreferences
     * const { count } = await prisma.taskPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskPreferenceDeleteManyArgs>(args?: SelectSubset<T, TaskPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskPreferences
     * const taskPreference = await prisma.taskPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskPreferenceUpdateManyArgs>(args: SelectSubset<T, TaskPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskPreference.
     * @param {TaskPreferenceUpsertArgs} args - Arguments to update or create a TaskPreference.
     * @example
     * // Update or create a TaskPreference
     * const taskPreference = await prisma.taskPreference.upsert({
     *   create: {
     *     // ... data to create a TaskPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskPreference we want to update
     *   }
     * })
     */
    upsert<T extends TaskPreferenceUpsertArgs>(args: SelectSubset<T, TaskPreferenceUpsertArgs<ExtArgs>>): Prisma__TaskPreferenceClient<$Result.GetResult<Prisma.$TaskPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceCountArgs} args - Arguments to filter TaskPreferences to count.
     * @example
     * // Count the number of TaskPreferences
     * const count = await prisma.taskPreference.count({
     *   where: {
     *     // ... the filter for the TaskPreferences we want to count
     *   }
     * })
    **/
    count<T extends TaskPreferenceCountArgs>(
      args?: Subset<T, TaskPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskPreferenceAggregateArgs>(args: Subset<T, TaskPreferenceAggregateArgs>): Prisma.PrismaPromise<GetTaskPreferenceAggregateType<T>>

    /**
     * Group by TaskPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: TaskPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskPreference model
   */
  readonly fields: TaskPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends RoomTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTaskDefaultArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskPreference model
   */
  interface TaskPreferenceFieldRefs {
    readonly id: FieldRef<"TaskPreference", 'String'>
    readonly priority: FieldRef<"TaskPreference", 'Int'>
    readonly userId: FieldRef<"TaskPreference", 'String'>
    readonly taskId: FieldRef<"TaskPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskPreference findUnique
   */
  export type TaskPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskPreference to fetch.
     */
    where: TaskPreferenceWhereUniqueInput
  }

  /**
   * TaskPreference findUniqueOrThrow
   */
  export type TaskPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskPreference to fetch.
     */
    where: TaskPreferenceWhereUniqueInput
  }

  /**
   * TaskPreference findFirst
   */
  export type TaskPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskPreference to fetch.
     */
    where?: TaskPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPreferences to fetch.
     */
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPreferences.
     */
    cursor?: TaskPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPreferences.
     */
    distinct?: TaskPreferenceScalarFieldEnum | TaskPreferenceScalarFieldEnum[]
  }

  /**
   * TaskPreference findFirstOrThrow
   */
  export type TaskPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskPreference to fetch.
     */
    where?: TaskPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPreferences to fetch.
     */
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPreferences.
     */
    cursor?: TaskPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPreferences.
     */
    distinct?: TaskPreferenceScalarFieldEnum | TaskPreferenceScalarFieldEnum[]
  }

  /**
   * TaskPreference findMany
   */
  export type TaskPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskPreferences to fetch.
     */
    where?: TaskPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPreferences to fetch.
     */
    orderBy?: TaskPreferenceOrderByWithRelationInput | TaskPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskPreferences.
     */
    cursor?: TaskPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPreferences.
     */
    skip?: number
    distinct?: TaskPreferenceScalarFieldEnum | TaskPreferenceScalarFieldEnum[]
  }

  /**
   * TaskPreference create
   */
  export type TaskPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskPreference.
     */
    data: XOR<TaskPreferenceCreateInput, TaskPreferenceUncheckedCreateInput>
  }

  /**
   * TaskPreference createMany
   */
  export type TaskPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskPreferences.
     */
    data: TaskPreferenceCreateManyInput | TaskPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskPreference update
   */
  export type TaskPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskPreference.
     */
    data: XOR<TaskPreferenceUpdateInput, TaskPreferenceUncheckedUpdateInput>
    /**
     * Choose, which TaskPreference to update.
     */
    where: TaskPreferenceWhereUniqueInput
  }

  /**
   * TaskPreference updateMany
   */
  export type TaskPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskPreferences.
     */
    data: XOR<TaskPreferenceUpdateManyMutationInput, TaskPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which TaskPreferences to update
     */
    where?: TaskPreferenceWhereInput
    /**
     * Limit how many TaskPreferences to update.
     */
    limit?: number
  }

  /**
   * TaskPreference upsert
   */
  export type TaskPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskPreference to update in case it exists.
     */
    where: TaskPreferenceWhereUniqueInput
    /**
     * In case the TaskPreference found by the `where` argument doesn't exist, create a new TaskPreference with this data.
     */
    create: XOR<TaskPreferenceCreateInput, TaskPreferenceUncheckedCreateInput>
    /**
     * In case the TaskPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskPreferenceUpdateInput, TaskPreferenceUncheckedUpdateInput>
  }

  /**
   * TaskPreference delete
   */
  export type TaskPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
    /**
     * Filter which TaskPreference to delete.
     */
    where: TaskPreferenceWhereUniqueInput
  }

  /**
   * TaskPreference deleteMany
   */
  export type TaskPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPreferences to delete
     */
    where?: TaskPreferenceWhereInput
    /**
     * Limit how many TaskPreferences to delete.
     */
    limit?: number
  }

  /**
   * TaskPreference without action
   */
  export type TaskPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPreference
     */
    select?: TaskPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPreference
     */
    omit?: TaskPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model AssignedTask
   */

  export type AggregateAssignedTask = {
    _count: AssignedTaskCountAggregateOutputType | null
    _avg: AssignedTaskAvgAggregateOutputType | null
    _sum: AssignedTaskSumAggregateOutputType | null
    _min: AssignedTaskMinAggregateOutputType | null
    _max: AssignedTaskMaxAggregateOutputType | null
  }

  export type AssignedTaskAvgAggregateOutputType = {
    difficulty: number | null
  }

  export type AssignedTaskSumAggregateOutputType = {
    difficulty: number | null
  }

  export type AssignedTaskMinAggregateOutputType = {
    id: string | null
    RoomTaskId: string | null
    userId: string | null
    difficulty: number | null
    roomId: string | null
    startDateTime: Date | null
    endDateTime: Date | null
  }

  export type AssignedTaskMaxAggregateOutputType = {
    id: string | null
    RoomTaskId: string | null
    userId: string | null
    difficulty: number | null
    roomId: string | null
    startDateTime: Date | null
    endDateTime: Date | null
  }

  export type AssignedTaskCountAggregateOutputType = {
    id: number
    RoomTaskId: number
    userId: number
    difficulty: number
    roomId: number
    startDateTime: number
    endDateTime: number
    _all: number
  }


  export type AssignedTaskAvgAggregateInputType = {
    difficulty?: true
  }

  export type AssignedTaskSumAggregateInputType = {
    difficulty?: true
  }

  export type AssignedTaskMinAggregateInputType = {
    id?: true
    RoomTaskId?: true
    userId?: true
    difficulty?: true
    roomId?: true
    startDateTime?: true
    endDateTime?: true
  }

  export type AssignedTaskMaxAggregateInputType = {
    id?: true
    RoomTaskId?: true
    userId?: true
    difficulty?: true
    roomId?: true
    startDateTime?: true
    endDateTime?: true
  }

  export type AssignedTaskCountAggregateInputType = {
    id?: true
    RoomTaskId?: true
    userId?: true
    difficulty?: true
    roomId?: true
    startDateTime?: true
    endDateTime?: true
    _all?: true
  }

  export type AssignedTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTask to aggregate.
     */
    where?: AssignedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTasks to fetch.
     */
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignedTasks
    **/
    _count?: true | AssignedTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignedTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignedTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignedTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignedTaskMaxAggregateInputType
  }

  export type GetAssignedTaskAggregateType<T extends AssignedTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignedTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignedTask[P]>
      : GetScalarType<T[P], AggregateAssignedTask[P]>
  }




  export type AssignedTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTaskWhereInput
    orderBy?: AssignedTaskOrderByWithAggregationInput | AssignedTaskOrderByWithAggregationInput[]
    by: AssignedTaskScalarFieldEnum[] | AssignedTaskScalarFieldEnum
    having?: AssignedTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignedTaskCountAggregateInputType | true
    _avg?: AssignedTaskAvgAggregateInputType
    _sum?: AssignedTaskSumAggregateInputType
    _min?: AssignedTaskMinAggregateInputType
    _max?: AssignedTaskMaxAggregateInputType
  }

  export type AssignedTaskGroupByOutputType = {
    id: string
    RoomTaskId: string
    userId: string
    difficulty: number
    roomId: string
    startDateTime: Date
    endDateTime: Date
    _count: AssignedTaskCountAggregateOutputType | null
    _avg: AssignedTaskAvgAggregateOutputType | null
    _sum: AssignedTaskSumAggregateOutputType | null
    _min: AssignedTaskMinAggregateOutputType | null
    _max: AssignedTaskMaxAggregateOutputType | null
  }

  type GetAssignedTaskGroupByPayload<T extends AssignedTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignedTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignedTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignedTaskGroupByOutputType[P]>
            : GetScalarType<T[P], AssignedTaskGroupByOutputType[P]>
        }
      >
    >


  export type AssignedTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RoomTaskId?: boolean
    userId?: boolean
    difficulty?: boolean
    roomId?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    RoomTask?: boolean | RoomTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTask"]>



  export type AssignedTaskSelectScalar = {
    id?: boolean
    RoomTaskId?: boolean
    userId?: boolean
    difficulty?: boolean
    roomId?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
  }

  export type AssignedTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "RoomTaskId" | "userId" | "difficulty" | "roomId" | "startDateTime" | "endDateTime", ExtArgs["result"]["assignedTask"]>
  export type AssignedTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoomTask?: boolean | RoomTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $AssignedTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignedTask"
    objects: {
      RoomTask: Prisma.$RoomTaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      RoomTaskId: string
      userId: string
      difficulty: number
      roomId: string
      startDateTime: Date
      endDateTime: Date
    }, ExtArgs["result"]["assignedTask"]>
    composites: {}
  }

  type AssignedTaskGetPayload<S extends boolean | null | undefined | AssignedTaskDefaultArgs> = $Result.GetResult<Prisma.$AssignedTaskPayload, S>

  type AssignedTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignedTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignedTaskCountAggregateInputType | true
    }

  export interface AssignedTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignedTask'], meta: { name: 'AssignedTask' } }
    /**
     * Find zero or one AssignedTask that matches the filter.
     * @param {AssignedTaskFindUniqueArgs} args - Arguments to find a AssignedTask
     * @example
     * // Get one AssignedTask
     * const assignedTask = await prisma.assignedTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignedTaskFindUniqueArgs>(args: SelectSubset<T, AssignedTaskFindUniqueArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignedTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignedTaskFindUniqueOrThrowArgs} args - Arguments to find a AssignedTask
     * @example
     * // Get one AssignedTask
     * const assignedTask = await prisma.assignedTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignedTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignedTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskFindFirstArgs} args - Arguments to find a AssignedTask
     * @example
     * // Get one AssignedTask
     * const assignedTask = await prisma.assignedTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignedTaskFindFirstArgs>(args?: SelectSubset<T, AssignedTaskFindFirstArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskFindFirstOrThrowArgs} args - Arguments to find a AssignedTask
     * @example
     * // Get one AssignedTask
     * const assignedTask = await prisma.assignedTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignedTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignedTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignedTasks
     * const assignedTasks = await prisma.assignedTask.findMany()
     * 
     * // Get first 10 AssignedTasks
     * const assignedTasks = await prisma.assignedTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignedTaskWithIdOnly = await prisma.assignedTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignedTaskFindManyArgs>(args?: SelectSubset<T, AssignedTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignedTask.
     * @param {AssignedTaskCreateArgs} args - Arguments to create a AssignedTask.
     * @example
     * // Create one AssignedTask
     * const AssignedTask = await prisma.assignedTask.create({
     *   data: {
     *     // ... data to create a AssignedTask
     *   }
     * })
     * 
     */
    create<T extends AssignedTaskCreateArgs>(args: SelectSubset<T, AssignedTaskCreateArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignedTasks.
     * @param {AssignedTaskCreateManyArgs} args - Arguments to create many AssignedTasks.
     * @example
     * // Create many AssignedTasks
     * const assignedTask = await prisma.assignedTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignedTaskCreateManyArgs>(args?: SelectSubset<T, AssignedTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssignedTask.
     * @param {AssignedTaskDeleteArgs} args - Arguments to delete one AssignedTask.
     * @example
     * // Delete one AssignedTask
     * const AssignedTask = await prisma.assignedTask.delete({
     *   where: {
     *     // ... filter to delete one AssignedTask
     *   }
     * })
     * 
     */
    delete<T extends AssignedTaskDeleteArgs>(args: SelectSubset<T, AssignedTaskDeleteArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignedTask.
     * @param {AssignedTaskUpdateArgs} args - Arguments to update one AssignedTask.
     * @example
     * // Update one AssignedTask
     * const assignedTask = await prisma.assignedTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignedTaskUpdateArgs>(args: SelectSubset<T, AssignedTaskUpdateArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignedTasks.
     * @param {AssignedTaskDeleteManyArgs} args - Arguments to filter AssignedTasks to delete.
     * @example
     * // Delete a few AssignedTasks
     * const { count } = await prisma.assignedTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignedTaskDeleteManyArgs>(args?: SelectSubset<T, AssignedTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignedTasks
     * const assignedTask = await prisma.assignedTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignedTaskUpdateManyArgs>(args: SelectSubset<T, AssignedTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssignedTask.
     * @param {AssignedTaskUpsertArgs} args - Arguments to update or create a AssignedTask.
     * @example
     * // Update or create a AssignedTask
     * const assignedTask = await prisma.assignedTask.upsert({
     *   create: {
     *     // ... data to create a AssignedTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignedTask we want to update
     *   }
     * })
     */
    upsert<T extends AssignedTaskUpsertArgs>(args: SelectSubset<T, AssignedTaskUpsertArgs<ExtArgs>>): Prisma__AssignedTaskClient<$Result.GetResult<Prisma.$AssignedTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskCountArgs} args - Arguments to filter AssignedTasks to count.
     * @example
     * // Count the number of AssignedTasks
     * const count = await prisma.assignedTask.count({
     *   where: {
     *     // ... the filter for the AssignedTasks we want to count
     *   }
     * })
    **/
    count<T extends AssignedTaskCountArgs>(
      args?: Subset<T, AssignedTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignedTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignedTaskAggregateArgs>(args: Subset<T, AssignedTaskAggregateArgs>): Prisma.PrismaPromise<GetAssignedTaskAggregateType<T>>

    /**
     * Group by AssignedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignedTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignedTaskGroupByArgs['orderBy'] }
        : { orderBy?: AssignedTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignedTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignedTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignedTask model
   */
  readonly fields: AssignedTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignedTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignedTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RoomTask<T extends RoomTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTaskDefaultArgs<ExtArgs>>): Prisma__RoomTaskClient<$Result.GetResult<Prisma.$RoomTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignedTask model
   */
  interface AssignedTaskFieldRefs {
    readonly id: FieldRef<"AssignedTask", 'String'>
    readonly RoomTaskId: FieldRef<"AssignedTask", 'String'>
    readonly userId: FieldRef<"AssignedTask", 'String'>
    readonly difficulty: FieldRef<"AssignedTask", 'Int'>
    readonly roomId: FieldRef<"AssignedTask", 'String'>
    readonly startDateTime: FieldRef<"AssignedTask", 'DateTime'>
    readonly endDateTime: FieldRef<"AssignedTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignedTask findUnique
   */
  export type AssignedTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTask to fetch.
     */
    where: AssignedTaskWhereUniqueInput
  }

  /**
   * AssignedTask findUniqueOrThrow
   */
  export type AssignedTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTask to fetch.
     */
    where: AssignedTaskWhereUniqueInput
  }

  /**
   * AssignedTask findFirst
   */
  export type AssignedTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTask to fetch.
     */
    where?: AssignedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTasks to fetch.
     */
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTasks.
     */
    cursor?: AssignedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTasks.
     */
    distinct?: AssignedTaskScalarFieldEnum | AssignedTaskScalarFieldEnum[]
  }

  /**
   * AssignedTask findFirstOrThrow
   */
  export type AssignedTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTask to fetch.
     */
    where?: AssignedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTasks to fetch.
     */
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTasks.
     */
    cursor?: AssignedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTasks.
     */
    distinct?: AssignedTaskScalarFieldEnum | AssignedTaskScalarFieldEnum[]
  }

  /**
   * AssignedTask findMany
   */
  export type AssignedTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTasks to fetch.
     */
    where?: AssignedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTasks to fetch.
     */
    orderBy?: AssignedTaskOrderByWithRelationInput | AssignedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignedTasks.
     */
    cursor?: AssignedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTasks.
     */
    skip?: number
    distinct?: AssignedTaskScalarFieldEnum | AssignedTaskScalarFieldEnum[]
  }

  /**
   * AssignedTask create
   */
  export type AssignedTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignedTask.
     */
    data: XOR<AssignedTaskCreateInput, AssignedTaskUncheckedCreateInput>
  }

  /**
   * AssignedTask createMany
   */
  export type AssignedTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignedTasks.
     */
    data: AssignedTaskCreateManyInput | AssignedTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignedTask update
   */
  export type AssignedTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignedTask.
     */
    data: XOR<AssignedTaskUpdateInput, AssignedTaskUncheckedUpdateInput>
    /**
     * Choose, which AssignedTask to update.
     */
    where: AssignedTaskWhereUniqueInput
  }

  /**
   * AssignedTask updateMany
   */
  export type AssignedTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignedTasks.
     */
    data: XOR<AssignedTaskUpdateManyMutationInput, AssignedTaskUncheckedUpdateManyInput>
    /**
     * Filter which AssignedTasks to update
     */
    where?: AssignedTaskWhereInput
    /**
     * Limit how many AssignedTasks to update.
     */
    limit?: number
  }

  /**
   * AssignedTask upsert
   */
  export type AssignedTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignedTask to update in case it exists.
     */
    where: AssignedTaskWhereUniqueInput
    /**
     * In case the AssignedTask found by the `where` argument doesn't exist, create a new AssignedTask with this data.
     */
    create: XOR<AssignedTaskCreateInput, AssignedTaskUncheckedCreateInput>
    /**
     * In case the AssignedTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignedTaskUpdateInput, AssignedTaskUncheckedUpdateInput>
  }

  /**
   * AssignedTask delete
   */
  export type AssignedTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
    /**
     * Filter which AssignedTask to delete.
     */
    where: AssignedTaskWhereUniqueInput
  }

  /**
   * AssignedTask deleteMany
   */
  export type AssignedTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTasks to delete
     */
    where?: AssignedTaskWhereInput
    /**
     * Limit how many AssignedTasks to delete.
     */
    limit?: number
  }

  /**
   * AssignedTask without action
   */
  export type AssignedTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTask
     */
    select?: AssignedTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTask
     */
    omit?: AssignedTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roomId: 'roomId',
    workLoad: 'workLoad'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    inviteCode: 'inviteCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ScheduleBlockScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    type: 'type',
    startTime: 'startTime',
    endTime: 'endTime',
    userId: 'userId'
  };

  export type ScheduleBlockScalarFieldEnum = (typeof ScheduleBlockScalarFieldEnum)[keyof typeof ScheduleBlockScalarFieldEnum]


  export const RoomQuietBlockScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    roomId: 'roomId',
    setByUserId: 'setByUserId'
  };

  export type RoomQuietBlockScalarFieldEnum = (typeof RoomQuietBlockScalarFieldEnum)[keyof typeof RoomQuietBlockScalarFieldEnum]


  export const RoomTaskTemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    difficulty: 'difficulty',
    estimatedTime: 'estimatedTime'
  };

  export type RoomTaskTemplateScalarFieldEnum = (typeof RoomTaskTemplateScalarFieldEnum)[keyof typeof RoomTaskTemplateScalarFieldEnum]


  export const RoomTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    difficulty: 'difficulty',
    estimatedTime: 'estimatedTime',
    roomId: 'roomId'
  };

  export type RoomTaskScalarFieldEnum = (typeof RoomTaskScalarFieldEnum)[keyof typeof RoomTaskScalarFieldEnum]


  export const TaskPreferenceScalarFieldEnum: {
    id: 'id',
    priority: 'priority',
    userId: 'userId',
    taskId: 'taskId'
  };

  export type TaskPreferenceScalarFieldEnum = (typeof TaskPreferenceScalarFieldEnum)[keyof typeof TaskPreferenceScalarFieldEnum]


  export const AssignedTaskScalarFieldEnum: {
    id: 'id',
    RoomTaskId: 'RoomTaskId',
    userId: 'userId',
    difficulty: 'difficulty',
    roomId: 'roomId',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime'
  };

  export type AssignedTaskScalarFieldEnum = (typeof AssignedTaskScalarFieldEnum)[keyof typeof AssignedTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    email: 'email',
    name: 'name',
    roomId: 'roomId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    inviteCode: 'inviteCode',
    ownerId: 'ownerId'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const ScheduleBlockOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type ScheduleBlockOrderByRelevanceFieldEnum = (typeof ScheduleBlockOrderByRelevanceFieldEnum)[keyof typeof ScheduleBlockOrderByRelevanceFieldEnum]


  export const RoomQuietBlockOrderByRelevanceFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    setByUserId: 'setByUserId'
  };

  export type RoomQuietBlockOrderByRelevanceFieldEnum = (typeof RoomQuietBlockOrderByRelevanceFieldEnum)[keyof typeof RoomQuietBlockOrderByRelevanceFieldEnum]


  export const RoomTaskTemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type RoomTaskTemplateOrderByRelevanceFieldEnum = (typeof RoomTaskTemplateOrderByRelevanceFieldEnum)[keyof typeof RoomTaskTemplateOrderByRelevanceFieldEnum]


  export const RoomTaskOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    roomId: 'roomId'
  };

  export type RoomTaskOrderByRelevanceFieldEnum = (typeof RoomTaskOrderByRelevanceFieldEnum)[keyof typeof RoomTaskOrderByRelevanceFieldEnum]


  export const TaskPreferenceOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId'
  };

  export type TaskPreferenceOrderByRelevanceFieldEnum = (typeof TaskPreferenceOrderByRelevanceFieldEnum)[keyof typeof TaskPreferenceOrderByRelevanceFieldEnum]


  export const AssignedTaskOrderByRelevanceFieldEnum: {
    id: 'id',
    RoomTaskId: 'RoomTaskId',
    userId: 'userId',
    roomId: 'roomId'
  };

  export type AssignedTaskOrderByRelevanceFieldEnum = (typeof AssignedTaskOrderByRelevanceFieldEnum)[keyof typeof AssignedTaskOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'TimeBlockType'
   */
  export type EnumTimeBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeBlockType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
    workLoad?: IntFilter<"User"> | number
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    ownedRoom?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    scheduleBlocks?: ScheduleBlockListRelationFilter
    createdQuietBlock?: RoomQuietBlockListRelationFilter
    taskPreferences?: TaskPreferenceListRelationFilter
    assignedTasks?: AssignedTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    workLoad?: SortOrder
    room?: RoomOrderByWithRelationInput
    ownedRoom?: RoomOrderByWithRelationInput
    scheduleBlocks?: ScheduleBlockOrderByRelationAggregateInput
    createdQuietBlock?: RoomQuietBlockOrderByRelationAggregateInput
    taskPreferences?: TaskPreferenceOrderByRelationAggregateInput
    assignedTasks?: AssignedTaskOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
    workLoad?: IntFilter<"User"> | number
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    ownedRoom?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    scheduleBlocks?: ScheduleBlockListRelationFilter
    createdQuietBlock?: RoomQuietBlockListRelationFilter
    taskPreferences?: TaskPreferenceListRelationFilter
    assignedTasks?: AssignedTaskListRelationFilter
  }, "id" | "googleId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    workLoad?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    roomId?: StringNullableWithAggregatesFilter<"User"> | string | null
    workLoad?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    inviteCode?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    ownerId?: StringFilter<"Room"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: UserListRelationFilter
    quietTimeBlocks?: RoomQuietBlockListRelationFilter
    RoomTasks?: RoomTaskListRelationFilter
    assignedTasks?: AssignedTaskListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    quietTimeBlocks?: RoomQuietBlockOrderByRelationAggregateInput
    RoomTasks?: RoomTaskOrderByRelationAggregateInput
    assignedTasks?: AssignedTaskOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    ownerId?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: UserListRelationFilter
    quietTimeBlocks?: RoomQuietBlockListRelationFilter
    RoomTasks?: RoomTaskListRelationFilter
    assignedTasks?: AssignedTaskListRelationFilter
  }, "id" | "inviteCode" | "ownerId">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    inviteCode?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type ScheduleBlockWhereInput = {
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    id?: StringFilter<"ScheduleBlock"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"ScheduleBlock"> | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFilter<"ScheduleBlock"> | $Enums.TimeBlockType
    startTime?: IntFilter<"ScheduleBlock"> | number
    endTime?: IntFilter<"ScheduleBlock"> | number
    userId?: StringFilter<"ScheduleBlock"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScheduleBlockOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ScheduleBlockOrderByRelevanceInput
  }

  export type ScheduleBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    dayOfWeek?: EnumDayOfWeekFilter<"ScheduleBlock"> | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFilter<"ScheduleBlock"> | $Enums.TimeBlockType
    startTime?: IntFilter<"ScheduleBlock"> | number
    endTime?: IntFilter<"ScheduleBlock"> | number
    userId?: StringFilter<"ScheduleBlock"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ScheduleBlockOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    userId?: SortOrder
    _count?: ScheduleBlockCountOrderByAggregateInput
    _avg?: ScheduleBlockAvgOrderByAggregateInput
    _max?: ScheduleBlockMaxOrderByAggregateInput
    _min?: ScheduleBlockMinOrderByAggregateInput
    _sum?: ScheduleBlockSumOrderByAggregateInput
  }

  export type ScheduleBlockScalarWhereWithAggregatesInput = {
    AND?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    OR?: ScheduleBlockScalarWhereWithAggregatesInput[]
    NOT?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleBlock"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"ScheduleBlock"> | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeWithAggregatesFilter<"ScheduleBlock"> | $Enums.TimeBlockType
    startTime?: IntWithAggregatesFilter<"ScheduleBlock"> | number
    endTime?: IntWithAggregatesFilter<"ScheduleBlock"> | number
    userId?: StringWithAggregatesFilter<"ScheduleBlock"> | string
  }

  export type RoomQuietBlockWhereInput = {
    AND?: RoomQuietBlockWhereInput | RoomQuietBlockWhereInput[]
    OR?: RoomQuietBlockWhereInput[]
    NOT?: RoomQuietBlockWhereInput | RoomQuietBlockWhereInput[]
    id?: StringFilter<"RoomQuietBlock"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"RoomQuietBlock"> | $Enums.DayOfWeek
    startTime?: IntFilter<"RoomQuietBlock"> | number
    endTime?: IntFilter<"RoomQuietBlock"> | number
    roomId?: StringFilter<"RoomQuietBlock"> | string
    setByUserId?: StringFilter<"RoomQuietBlock"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    setUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomQuietBlockOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    setByUserId?: SortOrder
    room?: RoomOrderByWithRelationInput
    setUser?: UserOrderByWithRelationInput
    _relevance?: RoomQuietBlockOrderByRelevanceInput
  }

  export type RoomQuietBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomQuietBlockWhereInput | RoomQuietBlockWhereInput[]
    OR?: RoomQuietBlockWhereInput[]
    NOT?: RoomQuietBlockWhereInput | RoomQuietBlockWhereInput[]
    dayOfWeek?: EnumDayOfWeekFilter<"RoomQuietBlock"> | $Enums.DayOfWeek
    startTime?: IntFilter<"RoomQuietBlock"> | number
    endTime?: IntFilter<"RoomQuietBlock"> | number
    roomId?: StringFilter<"RoomQuietBlock"> | string
    setByUserId?: StringFilter<"RoomQuietBlock"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    setUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomQuietBlockOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    setByUserId?: SortOrder
    _count?: RoomQuietBlockCountOrderByAggregateInput
    _avg?: RoomQuietBlockAvgOrderByAggregateInput
    _max?: RoomQuietBlockMaxOrderByAggregateInput
    _min?: RoomQuietBlockMinOrderByAggregateInput
    _sum?: RoomQuietBlockSumOrderByAggregateInput
  }

  export type RoomQuietBlockScalarWhereWithAggregatesInput = {
    AND?: RoomQuietBlockScalarWhereWithAggregatesInput | RoomQuietBlockScalarWhereWithAggregatesInput[]
    OR?: RoomQuietBlockScalarWhereWithAggregatesInput[]
    NOT?: RoomQuietBlockScalarWhereWithAggregatesInput | RoomQuietBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomQuietBlock"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"RoomQuietBlock"> | $Enums.DayOfWeek
    startTime?: IntWithAggregatesFilter<"RoomQuietBlock"> | number
    endTime?: IntWithAggregatesFilter<"RoomQuietBlock"> | number
    roomId?: StringWithAggregatesFilter<"RoomQuietBlock"> | string
    setByUserId?: StringWithAggregatesFilter<"RoomQuietBlock"> | string
  }

  export type RoomTaskTemplateWhereInput = {
    AND?: RoomTaskTemplateWhereInput | RoomTaskTemplateWhereInput[]
    OR?: RoomTaskTemplateWhereInput[]
    NOT?: RoomTaskTemplateWhereInput | RoomTaskTemplateWhereInput[]
    id?: StringFilter<"RoomTaskTemplate"> | string
    title?: StringFilter<"RoomTaskTemplate"> | string
    difficulty?: IntFilter<"RoomTaskTemplate"> | number
    estimatedTime?: IntFilter<"RoomTaskTemplate"> | number
  }

  export type RoomTaskTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    _relevance?: RoomTaskTemplateOrderByRelevanceInput
  }

  export type RoomTaskTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomTaskTemplateWhereInput | RoomTaskTemplateWhereInput[]
    OR?: RoomTaskTemplateWhereInput[]
    NOT?: RoomTaskTemplateWhereInput | RoomTaskTemplateWhereInput[]
    title?: StringFilter<"RoomTaskTemplate"> | string
    difficulty?: IntFilter<"RoomTaskTemplate"> | number
    estimatedTime?: IntFilter<"RoomTaskTemplate"> | number
  }, "id">

  export type RoomTaskTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    _count?: RoomTaskTemplateCountOrderByAggregateInput
    _avg?: RoomTaskTemplateAvgOrderByAggregateInput
    _max?: RoomTaskTemplateMaxOrderByAggregateInput
    _min?: RoomTaskTemplateMinOrderByAggregateInput
    _sum?: RoomTaskTemplateSumOrderByAggregateInput
  }

  export type RoomTaskTemplateScalarWhereWithAggregatesInput = {
    AND?: RoomTaskTemplateScalarWhereWithAggregatesInput | RoomTaskTemplateScalarWhereWithAggregatesInput[]
    OR?: RoomTaskTemplateScalarWhereWithAggregatesInput[]
    NOT?: RoomTaskTemplateScalarWhereWithAggregatesInput | RoomTaskTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomTaskTemplate"> | string
    title?: StringWithAggregatesFilter<"RoomTaskTemplate"> | string
    difficulty?: IntWithAggregatesFilter<"RoomTaskTemplate"> | number
    estimatedTime?: IntWithAggregatesFilter<"RoomTaskTemplate"> | number
  }

  export type RoomTaskWhereInput = {
    AND?: RoomTaskWhereInput | RoomTaskWhereInput[]
    OR?: RoomTaskWhereInput[]
    NOT?: RoomTaskWhereInput | RoomTaskWhereInput[]
    id?: StringFilter<"RoomTask"> | string
    title?: StringFilter<"RoomTask"> | string
    difficulty?: IntFilter<"RoomTask"> | number
    estimatedTime?: IntFilter<"RoomTask"> | number
    roomId?: StringFilter<"RoomTask"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    preferences?: TaskPreferenceListRelationFilter
    assignedTask?: XOR<AssignedTaskNullableScalarRelationFilter, AssignedTaskWhereInput> | null
  }

  export type RoomTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    roomId?: SortOrder
    room?: RoomOrderByWithRelationInput
    preferences?: TaskPreferenceOrderByRelationAggregateInput
    assignedTask?: AssignedTaskOrderByWithRelationInput
    _relevance?: RoomTaskOrderByRelevanceInput
  }

  export type RoomTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomTaskWhereInput | RoomTaskWhereInput[]
    OR?: RoomTaskWhereInput[]
    NOT?: RoomTaskWhereInput | RoomTaskWhereInput[]
    title?: StringFilter<"RoomTask"> | string
    difficulty?: IntFilter<"RoomTask"> | number
    estimatedTime?: IntFilter<"RoomTask"> | number
    roomId?: StringFilter<"RoomTask"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    preferences?: TaskPreferenceListRelationFilter
    assignedTask?: XOR<AssignedTaskNullableScalarRelationFilter, AssignedTaskWhereInput> | null
  }, "id">

  export type RoomTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    roomId?: SortOrder
    _count?: RoomTaskCountOrderByAggregateInput
    _avg?: RoomTaskAvgOrderByAggregateInput
    _max?: RoomTaskMaxOrderByAggregateInput
    _min?: RoomTaskMinOrderByAggregateInput
    _sum?: RoomTaskSumOrderByAggregateInput
  }

  export type RoomTaskScalarWhereWithAggregatesInput = {
    AND?: RoomTaskScalarWhereWithAggregatesInput | RoomTaskScalarWhereWithAggregatesInput[]
    OR?: RoomTaskScalarWhereWithAggregatesInput[]
    NOT?: RoomTaskScalarWhereWithAggregatesInput | RoomTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomTask"> | string
    title?: StringWithAggregatesFilter<"RoomTask"> | string
    difficulty?: IntWithAggregatesFilter<"RoomTask"> | number
    estimatedTime?: IntWithAggregatesFilter<"RoomTask"> | number
    roomId?: StringWithAggregatesFilter<"RoomTask"> | string
  }

  export type TaskPreferenceWhereInput = {
    AND?: TaskPreferenceWhereInput | TaskPreferenceWhereInput[]
    OR?: TaskPreferenceWhereInput[]
    NOT?: TaskPreferenceWhereInput | TaskPreferenceWhereInput[]
    id?: StringFilter<"TaskPreference"> | string
    priority?: IntFilter<"TaskPreference"> | number
    userId?: StringFilter<"TaskPreference"> | string
    taskId?: StringFilter<"TaskPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<RoomTaskScalarRelationFilter, RoomTaskWhereInput>
  }

  export type TaskPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: RoomTaskOrderByWithRelationInput
    _relevance?: TaskPreferenceOrderByRelevanceInput
  }

  export type TaskPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_taskId?: TaskPreferenceUserIdTaskIdCompoundUniqueInput
    AND?: TaskPreferenceWhereInput | TaskPreferenceWhereInput[]
    OR?: TaskPreferenceWhereInput[]
    NOT?: TaskPreferenceWhereInput | TaskPreferenceWhereInput[]
    priority?: IntFilter<"TaskPreference"> | number
    userId?: StringFilter<"TaskPreference"> | string
    taskId?: StringFilter<"TaskPreference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<RoomTaskScalarRelationFilter, RoomTaskWhereInput>
  }, "id" | "userId_taskId">

  export type TaskPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    _count?: TaskPreferenceCountOrderByAggregateInput
    _avg?: TaskPreferenceAvgOrderByAggregateInput
    _max?: TaskPreferenceMaxOrderByAggregateInput
    _min?: TaskPreferenceMinOrderByAggregateInput
    _sum?: TaskPreferenceSumOrderByAggregateInput
  }

  export type TaskPreferenceScalarWhereWithAggregatesInput = {
    AND?: TaskPreferenceScalarWhereWithAggregatesInput | TaskPreferenceScalarWhereWithAggregatesInput[]
    OR?: TaskPreferenceScalarWhereWithAggregatesInput[]
    NOT?: TaskPreferenceScalarWhereWithAggregatesInput | TaskPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskPreference"> | string
    priority?: IntWithAggregatesFilter<"TaskPreference"> | number
    userId?: StringWithAggregatesFilter<"TaskPreference"> | string
    taskId?: StringWithAggregatesFilter<"TaskPreference"> | string
  }

  export type AssignedTaskWhereInput = {
    AND?: AssignedTaskWhereInput | AssignedTaskWhereInput[]
    OR?: AssignedTaskWhereInput[]
    NOT?: AssignedTaskWhereInput | AssignedTaskWhereInput[]
    id?: StringFilter<"AssignedTask"> | string
    RoomTaskId?: StringFilter<"AssignedTask"> | string
    userId?: StringFilter<"AssignedTask"> | string
    difficulty?: IntFilter<"AssignedTask"> | number
    roomId?: StringFilter<"AssignedTask"> | string
    startDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
    endDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
    RoomTask?: XOR<RoomTaskScalarRelationFilter, RoomTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type AssignedTaskOrderByWithRelationInput = {
    id?: SortOrder
    RoomTaskId?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    roomId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    RoomTask?: RoomTaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    _relevance?: AssignedTaskOrderByRelevanceInput
  }

  export type AssignedTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    RoomTaskId?: string
    AND?: AssignedTaskWhereInput | AssignedTaskWhereInput[]
    OR?: AssignedTaskWhereInput[]
    NOT?: AssignedTaskWhereInput | AssignedTaskWhereInput[]
    userId?: StringFilter<"AssignedTask"> | string
    difficulty?: IntFilter<"AssignedTask"> | number
    roomId?: StringFilter<"AssignedTask"> | string
    startDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
    endDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
    RoomTask?: XOR<RoomTaskScalarRelationFilter, RoomTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "RoomTaskId">

  export type AssignedTaskOrderByWithAggregationInput = {
    id?: SortOrder
    RoomTaskId?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    roomId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    _count?: AssignedTaskCountOrderByAggregateInput
    _avg?: AssignedTaskAvgOrderByAggregateInput
    _max?: AssignedTaskMaxOrderByAggregateInput
    _min?: AssignedTaskMinOrderByAggregateInput
    _sum?: AssignedTaskSumOrderByAggregateInput
  }

  export type AssignedTaskScalarWhereWithAggregatesInput = {
    AND?: AssignedTaskScalarWhereWithAggregatesInput | AssignedTaskScalarWhereWithAggregatesInput[]
    OR?: AssignedTaskScalarWhereWithAggregatesInput[]
    NOT?: AssignedTaskScalarWhereWithAggregatesInput | AssignedTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignedTask"> | string
    RoomTaskId?: StringWithAggregatesFilter<"AssignedTask"> | string
    userId?: StringWithAggregatesFilter<"AssignedTask"> | string
    difficulty?: IntWithAggregatesFilter<"AssignedTask"> | number
    roomId?: StringWithAggregatesFilter<"AssignedTask"> | string
    startDateTime?: DateTimeWithAggregatesFilter<"AssignedTask"> | Date | string
    endDateTime?: DateTimeWithAggregatesFilter<"AssignedTask"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedRoomInput
    participants?: UserCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    participants?: UserUncheckedCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskUncheckedCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomNestedInput
    participants?: UserUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUncheckedUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleBlockCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
    user: UserCreateNestedOneWithoutScheduleBlocksInput
  }

  export type ScheduleBlockUncheckedCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
    userId: string
  }

  export type ScheduleBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutScheduleBlocksNestedInput
  }

  export type ScheduleBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleBlockCreateManyInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
    userId: string
  }

  export type ScheduleBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomQuietBlockCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    room: RoomCreateNestedOneWithoutQuietTimeBlocksInput
    setUser: UserCreateNestedOneWithoutCreatedQuietBlockInput
  }

  export type RoomQuietBlockUncheckedCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    roomId: string
    setByUserId: string
  }

  export type RoomQuietBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutQuietTimeBlocksNestedInput
    setUser?: UserUpdateOneRequiredWithoutCreatedQuietBlockNestedInput
  }

  export type RoomQuietBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    setByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomQuietBlockCreateManyInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    roomId: string
    setByUserId: string
  }

  export type RoomQuietBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomQuietBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    setByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTaskTemplateCreateInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
  }

  export type RoomTaskTemplateUncheckedCreateInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
  }

  export type RoomTaskTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTaskTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTaskTemplateCreateManyInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
  }

  export type RoomTaskTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTaskTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTaskCreateInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    room: RoomCreateNestedOneWithoutRoomTasksInput
    preferences?: TaskPreferenceCreateNestedManyWithoutTaskInput
    assignedTask?: AssignedTaskCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskUncheckedCreateInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    roomId: string
    preferences?: TaskPreferenceUncheckedCreateNestedManyWithoutTaskInput
    assignedTask?: AssignedTaskUncheckedCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutRoomTasksNestedInput
    preferences?: TaskPreferenceUpdateManyWithoutTaskNestedInput
    assignedTask?: AssignedTaskUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    preferences?: TaskPreferenceUncheckedUpdateManyWithoutTaskNestedInput
    assignedTask?: AssignedTaskUncheckedUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskCreateManyInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    roomId: string
  }

  export type RoomTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPreferenceCreateInput = {
    id?: string
    priority: number
    user: UserCreateNestedOneWithoutTaskPreferencesInput
    task: RoomTaskCreateNestedOneWithoutPreferencesInput
  }

  export type TaskPreferenceUncheckedCreateInput = {
    id?: string
    priority: number
    userId: string
    taskId: string
  }

  export type TaskPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTaskPreferencesNestedInput
    task?: RoomTaskUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type TaskPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPreferenceCreateManyInput = {
    id?: string
    priority: number
    userId: string
    taskId: string
  }

  export type TaskPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type TaskPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignedTaskCreateInput = {
    id?: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
    RoomTask: RoomTaskCreateNestedOneWithoutAssignedTaskInput
    user: UserCreateNestedOneWithoutAssignedTasksInput
    room: RoomCreateNestedOneWithoutAssignedTasksInput
  }

  export type AssignedTaskUncheckedCreateInput = {
    id?: string
    RoomTaskId: string
    userId: string
    difficulty: number
    roomId: string
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type AssignedTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomTask?: RoomTaskUpdateOneRequiredWithoutAssignedTaskNestedInput
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    room?: RoomUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type AssignedTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTaskCreateManyInput = {
    id?: string
    RoomTaskId: string
    userId: string
    difficulty: number
    roomId: string
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type AssignedTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type ScheduleBlockListRelationFilter = {
    every?: ScheduleBlockWhereInput
    some?: ScheduleBlockWhereInput
    none?: ScheduleBlockWhereInput
  }

  export type RoomQuietBlockListRelationFilter = {
    every?: RoomQuietBlockWhereInput
    some?: RoomQuietBlockWhereInput
    none?: RoomQuietBlockWhereInput
  }

  export type TaskPreferenceListRelationFilter = {
    every?: TaskPreferenceWhereInput
    some?: TaskPreferenceWhereInput
    none?: TaskPreferenceWhereInput
  }

  export type AssignedTaskListRelationFilter = {
    every?: AssignedTaskWhereInput
    some?: AssignedTaskWhereInput
    none?: AssignedTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduleBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomQuietBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignedTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    workLoad?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    workLoad?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    workLoad?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomId?: SortOrder
    workLoad?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    workLoad?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RoomTaskListRelationFilter = {
    every?: RoomTaskWhereInput
    some?: RoomTaskWhereInput
    none?: RoomTaskWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type EnumTimeBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[]
    notIn?: $Enums.TimeBlockType[]
    not?: NestedEnumTimeBlockTypeFilter<$PrismaModel> | $Enums.TimeBlockType
  }

  export type ScheduleBlockOrderByRelevanceInput = {
    fields: ScheduleBlockOrderByRelevanceFieldEnum | ScheduleBlockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleBlockCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleBlockAvgOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type ScheduleBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleBlockMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleBlockSumOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type EnumTimeBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[]
    notIn?: $Enums.TimeBlockType[]
    not?: NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomQuietBlockOrderByRelevanceInput = {
    fields: RoomQuietBlockOrderByRelevanceFieldEnum | RoomQuietBlockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomQuietBlockCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    setByUserId?: SortOrder
  }

  export type RoomQuietBlockAvgOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type RoomQuietBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    setByUserId?: SortOrder
  }

  export type RoomQuietBlockMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    setByUserId?: SortOrder
  }

  export type RoomQuietBlockSumOrderByAggregateInput = {
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type RoomTaskTemplateOrderByRelevanceInput = {
    fields: RoomTaskTemplateOrderByRelevanceFieldEnum | RoomTaskTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomTaskTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskTemplateAvgOrderByAggregateInput = {
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskTemplateSumOrderByAggregateInput = {
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type AssignedTaskNullableScalarRelationFilter = {
    is?: AssignedTaskWhereInput | null
    isNot?: AssignedTaskWhereInput | null
  }

  export type RoomTaskOrderByRelevanceInput = {
    fields: RoomTaskOrderByRelevanceFieldEnum | RoomTaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    roomId?: SortOrder
  }

  export type RoomTaskAvgOrderByAggregateInput = {
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    roomId?: SortOrder
  }

  export type RoomTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    estimatedTime?: SortOrder
    roomId?: SortOrder
  }

  export type RoomTaskSumOrderByAggregateInput = {
    difficulty?: SortOrder
    estimatedTime?: SortOrder
  }

  export type RoomTaskScalarRelationFilter = {
    is?: RoomTaskWhereInput
    isNot?: RoomTaskWhereInput
  }

  export type TaskPreferenceOrderByRelevanceInput = {
    fields: TaskPreferenceOrderByRelevanceFieldEnum | TaskPreferenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskPreferenceUserIdTaskIdCompoundUniqueInput = {
    userId: string
    taskId: string
  }

  export type TaskPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskPreferenceAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type TaskPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TaskPreferenceSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type AssignedTaskOrderByRelevanceInput = {
    fields: AssignedTaskOrderByRelevanceFieldEnum | AssignedTaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssignedTaskCountOrderByAggregateInput = {
    id?: SortOrder
    RoomTaskId?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    roomId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
  }

  export type AssignedTaskAvgOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type AssignedTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    RoomTaskId?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    roomId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
  }

  export type AssignedTaskMinOrderByAggregateInput = {
    id?: SortOrder
    RoomTaskId?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    roomId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
  }

  export type AssignedTaskSumOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type RoomCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput
    connect?: RoomWhereUniqueInput
  }

  export type ScheduleBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type RoomQuietBlockCreateNestedManyWithoutSetUserInput = {
    create?: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput> | RoomQuietBlockCreateWithoutSetUserInput[] | RoomQuietBlockUncheckedCreateWithoutSetUserInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutSetUserInput | RoomQuietBlockCreateOrConnectWithoutSetUserInput[]
    createMany?: RoomQuietBlockCreateManySetUserInputEnvelope
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
  }

  export type TaskPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput> | TaskPreferenceCreateWithoutUserInput[] | TaskPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutUserInput | TaskPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: TaskPreferenceCreateManyUserInputEnvelope
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
  }

  export type AssignedTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput> | AssignedTaskCreateWithoutUserInput[] | AssignedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutUserInput | AssignedTaskCreateOrConnectWithoutUserInput[]
    createMany?: AssignedTaskCreateManyUserInputEnvelope
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput
    connect?: RoomWhereUniqueInput
  }

  export type ScheduleBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput = {
    create?: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput> | RoomQuietBlockCreateWithoutSetUserInput[] | RoomQuietBlockUncheckedCreateWithoutSetUserInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutSetUserInput | RoomQuietBlockCreateOrConnectWithoutSetUserInput[]
    createMany?: RoomQuietBlockCreateManySetUserInputEnvelope
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
  }

  export type TaskPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput> | TaskPreferenceCreateWithoutUserInput[] | TaskPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutUserInput | TaskPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: TaskPreferenceCreateManyUserInputEnvelope
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
  }

  export type AssignedTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput> | AssignedTaskCreateWithoutUserInput[] | AssignedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutUserInput | AssignedTaskCreateOrConnectWithoutUserInput[]
    createMany?: AssignedTaskCreateManyUserInputEnvelope
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateOneWithoutParticipantsNestedInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    upsert?: RoomUpsertWithoutParticipantsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutParticipantsInput, RoomUpdateWithoutParticipantsInput>, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type RoomUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput
    upsert?: RoomUpsertWithoutOwnerInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutOwnerInput, RoomUpdateWithoutOwnerInput>, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type ScheduleBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutUserInput | ScheduleBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutUserInput | ScheduleBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutUserInput | ScheduleBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type RoomQuietBlockUpdateManyWithoutSetUserNestedInput = {
    create?: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput> | RoomQuietBlockCreateWithoutSetUserInput[] | RoomQuietBlockUncheckedCreateWithoutSetUserInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutSetUserInput | RoomQuietBlockCreateOrConnectWithoutSetUserInput[]
    upsert?: RoomQuietBlockUpsertWithWhereUniqueWithoutSetUserInput | RoomQuietBlockUpsertWithWhereUniqueWithoutSetUserInput[]
    createMany?: RoomQuietBlockCreateManySetUserInputEnvelope
    set?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    disconnect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    delete?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    update?: RoomQuietBlockUpdateWithWhereUniqueWithoutSetUserInput | RoomQuietBlockUpdateWithWhereUniqueWithoutSetUserInput[]
    updateMany?: RoomQuietBlockUpdateManyWithWhereWithoutSetUserInput | RoomQuietBlockUpdateManyWithWhereWithoutSetUserInput[]
    deleteMany?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
  }

  export type TaskPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput> | TaskPreferenceCreateWithoutUserInput[] | TaskPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutUserInput | TaskPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: TaskPreferenceUpsertWithWhereUniqueWithoutUserInput | TaskPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskPreferenceCreateManyUserInputEnvelope
    set?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    disconnect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    delete?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    update?: TaskPreferenceUpdateWithWhereUniqueWithoutUserInput | TaskPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskPreferenceUpdateManyWithWhereWithoutUserInput | TaskPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
  }

  export type AssignedTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput> | AssignedTaskCreateWithoutUserInput[] | AssignedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutUserInput | AssignedTaskCreateOrConnectWithoutUserInput[]
    upsert?: AssignedTaskUpsertWithWhereUniqueWithoutUserInput | AssignedTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignedTaskCreateManyUserInputEnvelope
    set?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    disconnect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    delete?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    update?: AssignedTaskUpdateWithWhereUniqueWithoutUserInput | AssignedTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignedTaskUpdateManyWithWhereWithoutUserInput | AssignedTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
  }

  export type RoomUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput
    upsert?: RoomUpsertWithoutOwnerInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutOwnerInput, RoomUpdateWithoutOwnerInput>, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutUserInput | ScheduleBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutUserInput | ScheduleBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutUserInput | ScheduleBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput = {
    create?: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput> | RoomQuietBlockCreateWithoutSetUserInput[] | RoomQuietBlockUncheckedCreateWithoutSetUserInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutSetUserInput | RoomQuietBlockCreateOrConnectWithoutSetUserInput[]
    upsert?: RoomQuietBlockUpsertWithWhereUniqueWithoutSetUserInput | RoomQuietBlockUpsertWithWhereUniqueWithoutSetUserInput[]
    createMany?: RoomQuietBlockCreateManySetUserInputEnvelope
    set?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    disconnect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    delete?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    update?: RoomQuietBlockUpdateWithWhereUniqueWithoutSetUserInput | RoomQuietBlockUpdateWithWhereUniqueWithoutSetUserInput[]
    updateMany?: RoomQuietBlockUpdateManyWithWhereWithoutSetUserInput | RoomQuietBlockUpdateManyWithWhereWithoutSetUserInput[]
    deleteMany?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
  }

  export type TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput> | TaskPreferenceCreateWithoutUserInput[] | TaskPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutUserInput | TaskPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: TaskPreferenceUpsertWithWhereUniqueWithoutUserInput | TaskPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskPreferenceCreateManyUserInputEnvelope
    set?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    disconnect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    delete?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    update?: TaskPreferenceUpdateWithWhereUniqueWithoutUserInput | TaskPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskPreferenceUpdateManyWithWhereWithoutUserInput | TaskPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
  }

  export type AssignedTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput> | AssignedTaskCreateWithoutUserInput[] | AssignedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutUserInput | AssignedTaskCreateOrConnectWithoutUserInput[]
    upsert?: AssignedTaskUpsertWithWhereUniqueWithoutUserInput | AssignedTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignedTaskCreateManyUserInputEnvelope
    set?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    disconnect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    delete?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    update?: AssignedTaskUpdateWithWhereUniqueWithoutUserInput | AssignedTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignedTaskUpdateManyWithWhereWithoutUserInput | AssignedTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedRoomInput = {
    create?: XOR<UserCreateWithoutOwnedRoomInput, UserUncheckedCreateWithoutOwnedRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRoomInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomQuietBlockCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput> | RoomQuietBlockCreateWithoutRoomInput[] | RoomQuietBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutRoomInput | RoomQuietBlockCreateOrConnectWithoutRoomInput[]
    createMany?: RoomQuietBlockCreateManyRoomInputEnvelope
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
  }

  export type RoomTaskCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput> | RoomTaskCreateWithoutRoomInput[] | RoomTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomTaskCreateOrConnectWithoutRoomInput | RoomTaskCreateOrConnectWithoutRoomInput[]
    createMany?: RoomTaskCreateManyRoomInputEnvelope
    connect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
  }

  export type AssignedTaskCreateNestedManyWithoutRoomInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput> | AssignedTaskCreateWithoutRoomInput[] | AssignedTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomInput | AssignedTaskCreateOrConnectWithoutRoomInput[]
    createMany?: AssignedTaskCreateManyRoomInputEnvelope
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput> | RoomQuietBlockCreateWithoutRoomInput[] | RoomQuietBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutRoomInput | RoomQuietBlockCreateOrConnectWithoutRoomInput[]
    createMany?: RoomQuietBlockCreateManyRoomInputEnvelope
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
  }

  export type RoomTaskUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput> | RoomTaskCreateWithoutRoomInput[] | RoomTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomTaskCreateOrConnectWithoutRoomInput | RoomTaskCreateOrConnectWithoutRoomInput[]
    createMany?: RoomTaskCreateManyRoomInputEnvelope
    connect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
  }

  export type AssignedTaskUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput> | AssignedTaskCreateWithoutRoomInput[] | AssignedTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomInput | AssignedTaskCreateOrConnectWithoutRoomInput[]
    createMany?: AssignedTaskCreateManyRoomInputEnvelope
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedRoomNestedInput = {
    create?: XOR<UserCreateWithoutOwnedRoomInput, UserUncheckedCreateWithoutOwnedRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRoomInput
    upsert?: UserUpsertWithoutOwnedRoomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedRoomInput, UserUpdateWithoutOwnedRoomInput>, UserUncheckedUpdateWithoutOwnedRoomInput>
  }

  export type UserUpdateManyWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomInput | UserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomInput | UserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomInput | UserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomQuietBlockUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput> | RoomQuietBlockCreateWithoutRoomInput[] | RoomQuietBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutRoomInput | RoomQuietBlockCreateOrConnectWithoutRoomInput[]
    upsert?: RoomQuietBlockUpsertWithWhereUniqueWithoutRoomInput | RoomQuietBlockUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomQuietBlockCreateManyRoomInputEnvelope
    set?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    disconnect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    delete?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    update?: RoomQuietBlockUpdateWithWhereUniqueWithoutRoomInput | RoomQuietBlockUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomQuietBlockUpdateManyWithWhereWithoutRoomInput | RoomQuietBlockUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
  }

  export type RoomTaskUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput> | RoomTaskCreateWithoutRoomInput[] | RoomTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomTaskCreateOrConnectWithoutRoomInput | RoomTaskCreateOrConnectWithoutRoomInput[]
    upsert?: RoomTaskUpsertWithWhereUniqueWithoutRoomInput | RoomTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomTaskCreateManyRoomInputEnvelope
    set?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    disconnect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    delete?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    connect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    update?: RoomTaskUpdateWithWhereUniqueWithoutRoomInput | RoomTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomTaskUpdateManyWithWhereWithoutRoomInput | RoomTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomTaskScalarWhereInput | RoomTaskScalarWhereInput[]
  }

  export type AssignedTaskUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput> | AssignedTaskCreateWithoutRoomInput[] | AssignedTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomInput | AssignedTaskCreateOrConnectWithoutRoomInput[]
    upsert?: AssignedTaskUpsertWithWhereUniqueWithoutRoomInput | AssignedTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AssignedTaskCreateManyRoomInputEnvelope
    set?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    disconnect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    delete?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    update?: AssignedTaskUpdateWithWhereUniqueWithoutRoomInput | AssignedTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AssignedTaskUpdateManyWithWhereWithoutRoomInput | AssignedTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput> | UserCreateWithoutRoomInput[] | UserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput | UserCreateOrConnectWithoutRoomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomInput | UserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: UserCreateManyRoomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomInput | UserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomInput | UserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput> | RoomQuietBlockCreateWithoutRoomInput[] | RoomQuietBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomQuietBlockCreateOrConnectWithoutRoomInput | RoomQuietBlockCreateOrConnectWithoutRoomInput[]
    upsert?: RoomQuietBlockUpsertWithWhereUniqueWithoutRoomInput | RoomQuietBlockUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomQuietBlockCreateManyRoomInputEnvelope
    set?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    disconnect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    delete?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    connect?: RoomQuietBlockWhereUniqueInput | RoomQuietBlockWhereUniqueInput[]
    update?: RoomQuietBlockUpdateWithWhereUniqueWithoutRoomInput | RoomQuietBlockUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomQuietBlockUpdateManyWithWhereWithoutRoomInput | RoomQuietBlockUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
  }

  export type RoomTaskUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput> | RoomTaskCreateWithoutRoomInput[] | RoomTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomTaskCreateOrConnectWithoutRoomInput | RoomTaskCreateOrConnectWithoutRoomInput[]
    upsert?: RoomTaskUpsertWithWhereUniqueWithoutRoomInput | RoomTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomTaskCreateManyRoomInputEnvelope
    set?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    disconnect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    delete?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    connect?: RoomTaskWhereUniqueInput | RoomTaskWhereUniqueInput[]
    update?: RoomTaskUpdateWithWhereUniqueWithoutRoomInput | RoomTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomTaskUpdateManyWithWhereWithoutRoomInput | RoomTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomTaskScalarWhereInput | RoomTaskScalarWhereInput[]
  }

  export type AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput> | AssignedTaskCreateWithoutRoomInput[] | AssignedTaskUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomInput | AssignedTaskCreateOrConnectWithoutRoomInput[]
    upsert?: AssignedTaskUpsertWithWhereUniqueWithoutRoomInput | AssignedTaskUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: AssignedTaskCreateManyRoomInputEnvelope
    set?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    disconnect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    delete?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    connect?: AssignedTaskWhereUniqueInput | AssignedTaskWhereUniqueInput[]
    update?: AssignedTaskUpdateWithWhereUniqueWithoutRoomInput | AssignedTaskUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: AssignedTaskUpdateManyWithWhereWithoutRoomInput | AssignedTaskUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutScheduleBlocksInput = {
    create?: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type EnumTimeBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.TimeBlockType
  }

  export type UserUpdateOneRequiredWithoutScheduleBlocksNestedInput = {
    create?: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleBlocksInput
    upsert?: UserUpsertWithoutScheduleBlocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScheduleBlocksInput, UserUpdateWithoutScheduleBlocksInput>, UserUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type RoomCreateNestedOneWithoutQuietTimeBlocksInput = {
    create?: XOR<RoomCreateWithoutQuietTimeBlocksInput, RoomUncheckedCreateWithoutQuietTimeBlocksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutQuietTimeBlocksInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedQuietBlockInput = {
    create?: XOR<UserCreateWithoutCreatedQuietBlockInput, UserUncheckedCreateWithoutCreatedQuietBlockInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuietBlockInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutQuietTimeBlocksNestedInput = {
    create?: XOR<RoomCreateWithoutQuietTimeBlocksInput, RoomUncheckedCreateWithoutQuietTimeBlocksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutQuietTimeBlocksInput
    upsert?: RoomUpsertWithoutQuietTimeBlocksInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutQuietTimeBlocksInput, RoomUpdateWithoutQuietTimeBlocksInput>, RoomUncheckedUpdateWithoutQuietTimeBlocksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedQuietBlockNestedInput = {
    create?: XOR<UserCreateWithoutCreatedQuietBlockInput, UserUncheckedCreateWithoutCreatedQuietBlockInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuietBlockInput
    upsert?: UserUpsertWithoutCreatedQuietBlockInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedQuietBlockInput, UserUpdateWithoutCreatedQuietBlockInput>, UserUncheckedUpdateWithoutCreatedQuietBlockInput>
  }

  export type RoomCreateNestedOneWithoutRoomTasksInput = {
    create?: XOR<RoomCreateWithoutRoomTasksInput, RoomUncheckedCreateWithoutRoomTasksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTasksInput
    connect?: RoomWhereUniqueInput
  }

  export type TaskPreferenceCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput> | TaskPreferenceCreateWithoutTaskInput[] | TaskPreferenceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutTaskInput | TaskPreferenceCreateOrConnectWithoutTaskInput[]
    createMany?: TaskPreferenceCreateManyTaskInputEnvelope
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
  }

  export type AssignedTaskCreateNestedOneWithoutRoomTaskInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomTaskInput
    connect?: AssignedTaskWhereUniqueInput
  }

  export type TaskPreferenceUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput> | TaskPreferenceCreateWithoutTaskInput[] | TaskPreferenceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutTaskInput | TaskPreferenceCreateOrConnectWithoutTaskInput[]
    createMany?: TaskPreferenceCreateManyTaskInputEnvelope
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
  }

  export type AssignedTaskUncheckedCreateNestedOneWithoutRoomTaskInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomTaskInput
    connect?: AssignedTaskWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomTasksNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTasksInput, RoomUncheckedCreateWithoutRoomTasksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTasksInput
    upsert?: RoomUpsertWithoutRoomTasksInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomTasksInput, RoomUpdateWithoutRoomTasksInput>, RoomUncheckedUpdateWithoutRoomTasksInput>
  }

  export type TaskPreferenceUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput> | TaskPreferenceCreateWithoutTaskInput[] | TaskPreferenceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutTaskInput | TaskPreferenceCreateOrConnectWithoutTaskInput[]
    upsert?: TaskPreferenceUpsertWithWhereUniqueWithoutTaskInput | TaskPreferenceUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskPreferenceCreateManyTaskInputEnvelope
    set?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    disconnect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    delete?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    update?: TaskPreferenceUpdateWithWhereUniqueWithoutTaskInput | TaskPreferenceUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskPreferenceUpdateManyWithWhereWithoutTaskInput | TaskPreferenceUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
  }

  export type AssignedTaskUpdateOneWithoutRoomTaskNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomTaskInput
    upsert?: AssignedTaskUpsertWithoutRoomTaskInput
    disconnect?: AssignedTaskWhereInput | boolean
    delete?: AssignedTaskWhereInput | boolean
    connect?: AssignedTaskWhereUniqueInput
    update?: XOR<XOR<AssignedTaskUpdateToOneWithWhereWithoutRoomTaskInput, AssignedTaskUpdateWithoutRoomTaskInput>, AssignedTaskUncheckedUpdateWithoutRoomTaskInput>
  }

  export type TaskPreferenceUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput> | TaskPreferenceCreateWithoutTaskInput[] | TaskPreferenceUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskPreferenceCreateOrConnectWithoutTaskInput | TaskPreferenceCreateOrConnectWithoutTaskInput[]
    upsert?: TaskPreferenceUpsertWithWhereUniqueWithoutTaskInput | TaskPreferenceUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskPreferenceCreateManyTaskInputEnvelope
    set?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    disconnect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    delete?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    connect?: TaskPreferenceWhereUniqueInput | TaskPreferenceWhereUniqueInput[]
    update?: TaskPreferenceUpdateWithWhereUniqueWithoutTaskInput | TaskPreferenceUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskPreferenceUpdateManyWithWhereWithoutTaskInput | TaskPreferenceUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
  }

  export type AssignedTaskUncheckedUpdateOneWithoutRoomTaskNestedInput = {
    create?: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
    connectOrCreate?: AssignedTaskCreateOrConnectWithoutRoomTaskInput
    upsert?: AssignedTaskUpsertWithoutRoomTaskInput
    disconnect?: AssignedTaskWhereInput | boolean
    delete?: AssignedTaskWhereInput | boolean
    connect?: AssignedTaskWhereUniqueInput
    update?: XOR<XOR<AssignedTaskUpdateToOneWithWhereWithoutRoomTaskInput, AssignedTaskUpdateWithoutRoomTaskInput>, AssignedTaskUncheckedUpdateWithoutRoomTaskInput>
  }

  export type UserCreateNestedOneWithoutTaskPreferencesInput = {
    create?: XOR<UserCreateWithoutTaskPreferencesInput, UserUncheckedCreateWithoutTaskPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomTaskCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<RoomTaskCreateWithoutPreferencesInput, RoomTaskUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: RoomTaskCreateOrConnectWithoutPreferencesInput
    connect?: RoomTaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTaskPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutTaskPreferencesInput, UserUncheckedCreateWithoutTaskPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskPreferencesInput
    upsert?: UserUpsertWithoutTaskPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskPreferencesInput, UserUpdateWithoutTaskPreferencesInput>, UserUncheckedUpdateWithoutTaskPreferencesInput>
  }

  export type RoomTaskUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<RoomTaskCreateWithoutPreferencesInput, RoomTaskUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: RoomTaskCreateOrConnectWithoutPreferencesInput
    upsert?: RoomTaskUpsertWithoutPreferencesInput
    connect?: RoomTaskWhereUniqueInput
    update?: XOR<XOR<RoomTaskUpdateToOneWithWhereWithoutPreferencesInput, RoomTaskUpdateWithoutPreferencesInput>, RoomTaskUncheckedUpdateWithoutPreferencesInput>
  }

  export type RoomTaskCreateNestedOneWithoutAssignedTaskInput = {
    create?: XOR<RoomTaskCreateWithoutAssignedTaskInput, RoomTaskUncheckedCreateWithoutAssignedTaskInput>
    connectOrCreate?: RoomTaskCreateOrConnectWithoutAssignedTaskInput
    connect?: RoomTaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<RoomCreateWithoutAssignedTasksInput, RoomUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAssignedTasksInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomTaskUpdateOneRequiredWithoutAssignedTaskNestedInput = {
    create?: XOR<RoomTaskCreateWithoutAssignedTaskInput, RoomTaskUncheckedCreateWithoutAssignedTaskInput>
    connectOrCreate?: RoomTaskCreateOrConnectWithoutAssignedTaskInput
    upsert?: RoomTaskUpsertWithoutAssignedTaskInput
    connect?: RoomTaskWhereUniqueInput
    update?: XOR<XOR<RoomTaskUpdateToOneWithWhereWithoutAssignedTaskInput, RoomTaskUpdateWithoutAssignedTaskInput>, RoomTaskUncheckedUpdateWithoutAssignedTaskInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type RoomUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<RoomCreateWithoutAssignedTasksInput, RoomUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAssignedTasksInput
    upsert?: RoomUpsertWithoutAssignedTasksInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAssignedTasksInput, RoomUpdateWithoutAssignedTasksInput>, RoomUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumTimeBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[]
    notIn?: $Enums.TimeBlockType[]
    not?: NestedEnumTimeBlockTypeFilter<$PrismaModel> | $Enums.TimeBlockType
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[]
    notIn?: $Enums.TimeBlockType[]
    not?: NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
  }

  export type RoomCreateWithoutParticipantsInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedRoomInput
    quietTimeBlocks?: RoomQuietBlockCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    quietTimeBlocks?: RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskUncheckedCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutParticipantsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
  }

  export type RoomCreateWithoutOwnerInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskUncheckedCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type ScheduleBlockCreateWithoutUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
  }

  export type ScheduleBlockUncheckedCreateWithoutUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
  }

  export type ScheduleBlockCreateOrConnectWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    create: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput>
  }

  export type ScheduleBlockCreateManyUserInputEnvelope = {
    data: ScheduleBlockCreateManyUserInput | ScheduleBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomQuietBlockCreateWithoutSetUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    room: RoomCreateNestedOneWithoutQuietTimeBlocksInput
  }

  export type RoomQuietBlockUncheckedCreateWithoutSetUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    roomId: string
  }

  export type RoomQuietBlockCreateOrConnectWithoutSetUserInput = {
    where: RoomQuietBlockWhereUniqueInput
    create: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput>
  }

  export type RoomQuietBlockCreateManySetUserInputEnvelope = {
    data: RoomQuietBlockCreateManySetUserInput | RoomQuietBlockCreateManySetUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskPreferenceCreateWithoutUserInput = {
    id?: string
    priority: number
    task: RoomTaskCreateNestedOneWithoutPreferencesInput
  }

  export type TaskPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    priority: number
    taskId: string
  }

  export type TaskPreferenceCreateOrConnectWithoutUserInput = {
    where: TaskPreferenceWhereUniqueInput
    create: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput>
  }

  export type TaskPreferenceCreateManyUserInputEnvelope = {
    data: TaskPreferenceCreateManyUserInput | TaskPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTaskCreateWithoutUserInput = {
    id?: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
    RoomTask: RoomTaskCreateNestedOneWithoutAssignedTaskInput
    room: RoomCreateNestedOneWithoutAssignedTasksInput
  }

  export type AssignedTaskUncheckedCreateWithoutUserInput = {
    id?: string
    RoomTaskId: string
    difficulty: number
    roomId: string
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type AssignedTaskCreateOrConnectWithoutUserInput = {
    where: AssignedTaskWhereUniqueInput
    create: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput>
  }

  export type AssignedTaskCreateManyUserInputEnvelope = {
    data: AssignedTaskCreateManyUserInput | AssignedTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutParticipantsInput = {
    update: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type RoomUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    quietTimeBlocks?: RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUncheckedUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUpsertWithoutOwnerInput = {
    update: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutOwnerInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUncheckedUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ScheduleBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    update: XOR<ScheduleBlockUpdateWithoutUserInput, ScheduleBlockUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput>
  }

  export type ScheduleBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    data: XOR<ScheduleBlockUpdateWithoutUserInput, ScheduleBlockUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleBlockUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleBlockScalarWhereInput
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleBlockScalarWhereInput = {
    AND?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
    OR?: ScheduleBlockScalarWhereInput[]
    NOT?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
    id?: StringFilter<"ScheduleBlock"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"ScheduleBlock"> | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFilter<"ScheduleBlock"> | $Enums.TimeBlockType
    startTime?: IntFilter<"ScheduleBlock"> | number
    endTime?: IntFilter<"ScheduleBlock"> | number
    userId?: StringFilter<"ScheduleBlock"> | string
  }

  export type RoomQuietBlockUpsertWithWhereUniqueWithoutSetUserInput = {
    where: RoomQuietBlockWhereUniqueInput
    update: XOR<RoomQuietBlockUpdateWithoutSetUserInput, RoomQuietBlockUncheckedUpdateWithoutSetUserInput>
    create: XOR<RoomQuietBlockCreateWithoutSetUserInput, RoomQuietBlockUncheckedCreateWithoutSetUserInput>
  }

  export type RoomQuietBlockUpdateWithWhereUniqueWithoutSetUserInput = {
    where: RoomQuietBlockWhereUniqueInput
    data: XOR<RoomQuietBlockUpdateWithoutSetUserInput, RoomQuietBlockUncheckedUpdateWithoutSetUserInput>
  }

  export type RoomQuietBlockUpdateManyWithWhereWithoutSetUserInput = {
    where: RoomQuietBlockScalarWhereInput
    data: XOR<RoomQuietBlockUpdateManyMutationInput, RoomQuietBlockUncheckedUpdateManyWithoutSetUserInput>
  }

  export type RoomQuietBlockScalarWhereInput = {
    AND?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
    OR?: RoomQuietBlockScalarWhereInput[]
    NOT?: RoomQuietBlockScalarWhereInput | RoomQuietBlockScalarWhereInput[]
    id?: StringFilter<"RoomQuietBlock"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"RoomQuietBlock"> | $Enums.DayOfWeek
    startTime?: IntFilter<"RoomQuietBlock"> | number
    endTime?: IntFilter<"RoomQuietBlock"> | number
    roomId?: StringFilter<"RoomQuietBlock"> | string
    setByUserId?: StringFilter<"RoomQuietBlock"> | string
  }

  export type TaskPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskPreferenceWhereUniqueInput
    update: XOR<TaskPreferenceUpdateWithoutUserInput, TaskPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<TaskPreferenceCreateWithoutUserInput, TaskPreferenceUncheckedCreateWithoutUserInput>
  }

  export type TaskPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskPreferenceWhereUniqueInput
    data: XOR<TaskPreferenceUpdateWithoutUserInput, TaskPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type TaskPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: TaskPreferenceScalarWhereInput
    data: XOR<TaskPreferenceUpdateManyMutationInput, TaskPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskPreferenceScalarWhereInput = {
    AND?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
    OR?: TaskPreferenceScalarWhereInput[]
    NOT?: TaskPreferenceScalarWhereInput | TaskPreferenceScalarWhereInput[]
    id?: StringFilter<"TaskPreference"> | string
    priority?: IntFilter<"TaskPreference"> | number
    userId?: StringFilter<"TaskPreference"> | string
    taskId?: StringFilter<"TaskPreference"> | string
  }

  export type AssignedTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignedTaskWhereUniqueInput
    update: XOR<AssignedTaskUpdateWithoutUserInput, AssignedTaskUncheckedUpdateWithoutUserInput>
    create: XOR<AssignedTaskCreateWithoutUserInput, AssignedTaskUncheckedCreateWithoutUserInput>
  }

  export type AssignedTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignedTaskWhereUniqueInput
    data: XOR<AssignedTaskUpdateWithoutUserInput, AssignedTaskUncheckedUpdateWithoutUserInput>
  }

  export type AssignedTaskUpdateManyWithWhereWithoutUserInput = {
    where: AssignedTaskScalarWhereInput
    data: XOR<AssignedTaskUpdateManyMutationInput, AssignedTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignedTaskScalarWhereInput = {
    AND?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
    OR?: AssignedTaskScalarWhereInput[]
    NOT?: AssignedTaskScalarWhereInput | AssignedTaskScalarWhereInput[]
    id?: StringFilter<"AssignedTask"> | string
    RoomTaskId?: StringFilter<"AssignedTask"> | string
    userId?: StringFilter<"AssignedTask"> | string
    difficulty?: IntFilter<"AssignedTask"> | number
    roomId?: StringFilter<"AssignedTask"> | string
    startDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
    endDateTime?: DateTimeFilter<"AssignedTask"> | Date | string
  }

  export type UserCreateWithoutOwnedRoomInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedRoomInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedRoomInput, UserUncheckedCreateWithoutOwnedRoomInput>
  }

  export type UserCreateWithoutRoomInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type UserCreateManyRoomInputEnvelope = {
    data: UserCreateManyRoomInput | UserCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomQuietBlockCreateWithoutRoomInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    setUser: UserCreateNestedOneWithoutCreatedQuietBlockInput
  }

  export type RoomQuietBlockUncheckedCreateWithoutRoomInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    setByUserId: string
  }

  export type RoomQuietBlockCreateOrConnectWithoutRoomInput = {
    where: RoomQuietBlockWhereUniqueInput
    create: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput>
  }

  export type RoomQuietBlockCreateManyRoomInputEnvelope = {
    data: RoomQuietBlockCreateManyRoomInput | RoomQuietBlockCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomTaskCreateWithoutRoomInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    preferences?: TaskPreferenceCreateNestedManyWithoutTaskInput
    assignedTask?: AssignedTaskCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskUncheckedCreateWithoutRoomInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    preferences?: TaskPreferenceUncheckedCreateNestedManyWithoutTaskInput
    assignedTask?: AssignedTaskUncheckedCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskCreateOrConnectWithoutRoomInput = {
    where: RoomTaskWhereUniqueInput
    create: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput>
  }

  export type RoomTaskCreateManyRoomInputEnvelope = {
    data: RoomTaskCreateManyRoomInput | RoomTaskCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTaskCreateWithoutRoomInput = {
    id?: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
    RoomTask: RoomTaskCreateNestedOneWithoutAssignedTaskInput
    user: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type AssignedTaskUncheckedCreateWithoutRoomInput = {
    id?: string
    RoomTaskId: string
    userId: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type AssignedTaskCreateOrConnectWithoutRoomInput = {
    where: AssignedTaskWhereUniqueInput
    create: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput>
  }

  export type AssignedTaskCreateManyRoomInputEnvelope = {
    data: AssignedTaskCreateManyRoomInput | AssignedTaskCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedRoomInput = {
    update: XOR<UserUpdateWithoutOwnedRoomInput, UserUncheckedUpdateWithoutOwnedRoomInput>
    create: XOR<UserCreateWithoutOwnedRoomInput, UserUncheckedCreateWithoutOwnedRoomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedRoomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedRoomInput, UserUncheckedUpdateWithoutOwnedRoomInput>
  }

  export type UserUpdateWithoutOwnedRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoomInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoomInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
  }

  export type UserUpdateManyWithWhereWithoutRoomInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roomId?: StringNullableFilter<"User"> | string | null
    workLoad?: IntFilter<"User"> | number
  }

  export type RoomQuietBlockUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomQuietBlockWhereUniqueInput
    update: XOR<RoomQuietBlockUpdateWithoutRoomInput, RoomQuietBlockUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomQuietBlockCreateWithoutRoomInput, RoomQuietBlockUncheckedCreateWithoutRoomInput>
  }

  export type RoomQuietBlockUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomQuietBlockWhereUniqueInput
    data: XOR<RoomQuietBlockUpdateWithoutRoomInput, RoomQuietBlockUncheckedUpdateWithoutRoomInput>
  }

  export type RoomQuietBlockUpdateManyWithWhereWithoutRoomInput = {
    where: RoomQuietBlockScalarWhereInput
    data: XOR<RoomQuietBlockUpdateManyMutationInput, RoomQuietBlockUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomTaskUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomTaskWhereUniqueInput
    update: XOR<RoomTaskUpdateWithoutRoomInput, RoomTaskUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomTaskCreateWithoutRoomInput, RoomTaskUncheckedCreateWithoutRoomInput>
  }

  export type RoomTaskUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomTaskWhereUniqueInput
    data: XOR<RoomTaskUpdateWithoutRoomInput, RoomTaskUncheckedUpdateWithoutRoomInput>
  }

  export type RoomTaskUpdateManyWithWhereWithoutRoomInput = {
    where: RoomTaskScalarWhereInput
    data: XOR<RoomTaskUpdateManyMutationInput, RoomTaskUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomTaskScalarWhereInput = {
    AND?: RoomTaskScalarWhereInput | RoomTaskScalarWhereInput[]
    OR?: RoomTaskScalarWhereInput[]
    NOT?: RoomTaskScalarWhereInput | RoomTaskScalarWhereInput[]
    id?: StringFilter<"RoomTask"> | string
    title?: StringFilter<"RoomTask"> | string
    difficulty?: IntFilter<"RoomTask"> | number
    estimatedTime?: IntFilter<"RoomTask"> | number
    roomId?: StringFilter<"RoomTask"> | string
  }

  export type AssignedTaskUpsertWithWhereUniqueWithoutRoomInput = {
    where: AssignedTaskWhereUniqueInput
    update: XOR<AssignedTaskUpdateWithoutRoomInput, AssignedTaskUncheckedUpdateWithoutRoomInput>
    create: XOR<AssignedTaskCreateWithoutRoomInput, AssignedTaskUncheckedCreateWithoutRoomInput>
  }

  export type AssignedTaskUpdateWithWhereUniqueWithoutRoomInput = {
    where: AssignedTaskWhereUniqueInput
    data: XOR<AssignedTaskUpdateWithoutRoomInput, AssignedTaskUncheckedUpdateWithoutRoomInput>
  }

  export type AssignedTaskUpdateManyWithWhereWithoutRoomInput = {
    where: AssignedTaskScalarWhereInput
    data: XOR<AssignedTaskUpdateManyMutationInput, AssignedTaskUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutScheduleBlocksInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScheduleBlocksInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScheduleBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
  }

  export type UserUpsertWithoutScheduleBlocksInput = {
    update: XOR<UserUpdateWithoutScheduleBlocksInput, UserUncheckedUpdateWithoutScheduleBlocksInput>
    create: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScheduleBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScheduleBlocksInput, UserUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type UserUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutQuietTimeBlocksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedRoomInput
    participants?: UserCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutQuietTimeBlocksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    participants?: UserUncheckedCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskUncheckedCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutQuietTimeBlocksInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutQuietTimeBlocksInput, RoomUncheckedCreateWithoutQuietTimeBlocksInput>
  }

  export type UserCreateWithoutCreatedQuietBlockInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedQuietBlockInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedQuietBlockInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedQuietBlockInput, UserUncheckedCreateWithoutCreatedQuietBlockInput>
  }

  export type RoomUpsertWithoutQuietTimeBlocksInput = {
    update: XOR<RoomUpdateWithoutQuietTimeBlocksInput, RoomUncheckedUpdateWithoutQuietTimeBlocksInput>
    create: XOR<RoomCreateWithoutQuietTimeBlocksInput, RoomUncheckedCreateWithoutQuietTimeBlocksInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutQuietTimeBlocksInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutQuietTimeBlocksInput, RoomUncheckedUpdateWithoutQuietTimeBlocksInput>
  }

  export type RoomUpdateWithoutQuietTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomNestedInput
    participants?: UserUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutQuietTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUncheckedUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutCreatedQuietBlockInput = {
    update: XOR<UserUpdateWithoutCreatedQuietBlockInput, UserUncheckedUpdateWithoutCreatedQuietBlockInput>
    create: XOR<UserCreateWithoutCreatedQuietBlockInput, UserUncheckedCreateWithoutCreatedQuietBlockInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedQuietBlockInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedQuietBlockInput, UserUncheckedUpdateWithoutCreatedQuietBlockInput>
  }

  export type UserUpdateWithoutCreatedQuietBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedQuietBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutRoomTasksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedRoomInput
    participants?: UserCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomTasksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    participants?: UserUncheckedCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomTasksInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomTasksInput, RoomUncheckedCreateWithoutRoomTasksInput>
  }

  export type TaskPreferenceCreateWithoutTaskInput = {
    id?: string
    priority: number
    user: UserCreateNestedOneWithoutTaskPreferencesInput
  }

  export type TaskPreferenceUncheckedCreateWithoutTaskInput = {
    id?: string
    priority: number
    userId: string
  }

  export type TaskPreferenceCreateOrConnectWithoutTaskInput = {
    where: TaskPreferenceWhereUniqueInput
    create: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput>
  }

  export type TaskPreferenceCreateManyTaskInputEnvelope = {
    data: TaskPreferenceCreateManyTaskInput | TaskPreferenceCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTaskCreateWithoutRoomTaskInput = {
    id?: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
    user: UserCreateNestedOneWithoutAssignedTasksInput
    room: RoomCreateNestedOneWithoutAssignedTasksInput
  }

  export type AssignedTaskUncheckedCreateWithoutRoomTaskInput = {
    id?: string
    userId: string
    difficulty: number
    roomId: string
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type AssignedTaskCreateOrConnectWithoutRoomTaskInput = {
    where: AssignedTaskWhereUniqueInput
    create: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
  }

  export type RoomUpsertWithoutRoomTasksInput = {
    update: XOR<RoomUpdateWithoutRoomTasksInput, RoomUncheckedUpdateWithoutRoomTasksInput>
    create: XOR<RoomCreateWithoutRoomTasksInput, RoomUncheckedCreateWithoutRoomTasksInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomTasksInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomTasksInput, RoomUncheckedUpdateWithoutRoomTasksInput>
  }

  export type RoomUpdateWithoutRoomTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomNestedInput
    participants?: UserUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type TaskPreferenceUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskPreferenceWhereUniqueInput
    update: XOR<TaskPreferenceUpdateWithoutTaskInput, TaskPreferenceUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskPreferenceCreateWithoutTaskInput, TaskPreferenceUncheckedCreateWithoutTaskInput>
  }

  export type TaskPreferenceUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskPreferenceWhereUniqueInput
    data: XOR<TaskPreferenceUpdateWithoutTaskInput, TaskPreferenceUncheckedUpdateWithoutTaskInput>
  }

  export type TaskPreferenceUpdateManyWithWhereWithoutTaskInput = {
    where: TaskPreferenceScalarWhereInput
    data: XOR<TaskPreferenceUpdateManyMutationInput, TaskPreferenceUncheckedUpdateManyWithoutTaskInput>
  }

  export type AssignedTaskUpsertWithoutRoomTaskInput = {
    update: XOR<AssignedTaskUpdateWithoutRoomTaskInput, AssignedTaskUncheckedUpdateWithoutRoomTaskInput>
    create: XOR<AssignedTaskCreateWithoutRoomTaskInput, AssignedTaskUncheckedCreateWithoutRoomTaskInput>
    where?: AssignedTaskWhereInput
  }

  export type AssignedTaskUpdateToOneWithWhereWithoutRoomTaskInput = {
    where?: AssignedTaskWhereInput
    data: XOR<AssignedTaskUpdateWithoutRoomTaskInput, AssignedTaskUncheckedUpdateWithoutRoomTaskInput>
  }

  export type AssignedTaskUpdateWithoutRoomTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    room?: RoomUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type AssignedTaskUncheckedUpdateWithoutRoomTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTaskPreferencesInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    assignedTasks?: AssignedTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskPreferencesInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    assignedTasks?: AssignedTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskPreferencesInput, UserUncheckedCreateWithoutTaskPreferencesInput>
  }

  export type RoomTaskCreateWithoutPreferencesInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    room: RoomCreateNestedOneWithoutRoomTasksInput
    assignedTask?: AssignedTaskCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskUncheckedCreateWithoutPreferencesInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    roomId: string
    assignedTask?: AssignedTaskUncheckedCreateNestedOneWithoutRoomTaskInput
  }

  export type RoomTaskCreateOrConnectWithoutPreferencesInput = {
    where: RoomTaskWhereUniqueInput
    create: XOR<RoomTaskCreateWithoutPreferencesInput, RoomTaskUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutTaskPreferencesInput = {
    update: XOR<UserUpdateWithoutTaskPreferencesInput, UserUncheckedUpdateWithoutTaskPreferencesInput>
    create: XOR<UserCreateWithoutTaskPreferencesInput, UserUncheckedCreateWithoutTaskPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskPreferencesInput, UserUncheckedUpdateWithoutTaskPreferencesInput>
  }

  export type UserUpdateWithoutTaskPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomTaskUpsertWithoutPreferencesInput = {
    update: XOR<RoomTaskUpdateWithoutPreferencesInput, RoomTaskUncheckedUpdateWithoutPreferencesInput>
    create: XOR<RoomTaskCreateWithoutPreferencesInput, RoomTaskUncheckedCreateWithoutPreferencesInput>
    where?: RoomTaskWhereInput
  }

  export type RoomTaskUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: RoomTaskWhereInput
    data: XOR<RoomTaskUpdateWithoutPreferencesInput, RoomTaskUncheckedUpdateWithoutPreferencesInput>
  }

  export type RoomTaskUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutRoomTasksNestedInput
    assignedTask?: AssignedTaskUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    assignedTask?: AssignedTaskUncheckedUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskCreateWithoutAssignedTaskInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    room: RoomCreateNestedOneWithoutRoomTasksInput
    preferences?: TaskPreferenceCreateNestedManyWithoutTaskInput
  }

  export type RoomTaskUncheckedCreateWithoutAssignedTaskInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
    roomId: string
    preferences?: TaskPreferenceUncheckedCreateNestedManyWithoutTaskInput
  }

  export type RoomTaskCreateOrConnectWithoutAssignedTaskInput = {
    where: RoomTaskWhereUniqueInput
    create: XOR<RoomTaskCreateWithoutAssignedTaskInput, RoomTaskUncheckedCreateWithoutAssignedTaskInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
    room?: RoomCreateNestedOneWithoutParticipantsInput
    ownedRoom?: RoomCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomId?: string | null
    workLoad?: number
    ownedRoom?: RoomUncheckedCreateNestedOneWithoutOwnerInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    createdQuietBlock?: RoomQuietBlockUncheckedCreateNestedManyWithoutSetUserInput
    taskPreferences?: TaskPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type RoomCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedRoomInput
    participants?: UserCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    participants?: UserUncheckedCreateNestedManyWithoutRoomInput
    quietTimeBlocks?: RoomQuietBlockUncheckedCreateNestedManyWithoutRoomInput
    RoomTasks?: RoomTaskUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAssignedTasksInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAssignedTasksInput, RoomUncheckedCreateWithoutAssignedTasksInput>
  }

  export type RoomTaskUpsertWithoutAssignedTaskInput = {
    update: XOR<RoomTaskUpdateWithoutAssignedTaskInput, RoomTaskUncheckedUpdateWithoutAssignedTaskInput>
    create: XOR<RoomTaskCreateWithoutAssignedTaskInput, RoomTaskUncheckedCreateWithoutAssignedTaskInput>
    where?: RoomTaskWhereInput
  }

  export type RoomTaskUpdateToOneWithWhereWithoutAssignedTaskInput = {
    where?: RoomTaskWhereInput
    data: XOR<RoomTaskUpdateWithoutAssignedTaskInput, RoomTaskUncheckedUpdateWithoutAssignedTaskInput>
  }

  export type RoomTaskUpdateWithoutAssignedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutRoomTasksNestedInput
    preferences?: TaskPreferenceUpdateManyWithoutTaskNestedInput
  }

  export type RoomTaskUncheckedUpdateWithoutAssignedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    preferences?: TaskPreferenceUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneWithoutParticipantsNestedInput
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutAssignedTasksInput = {
    update: XOR<RoomUpdateWithoutAssignedTasksInput, RoomUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<RoomCreateWithoutAssignedTasksInput, RoomUncheckedCreateWithoutAssignedTasksInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAssignedTasksInput, RoomUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type RoomUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomNestedInput
    participants?: UserUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutRoomNestedInput
    quietTimeBlocks?: RoomQuietBlockUncheckedUpdateManyWithoutRoomNestedInput
    RoomTasks?: RoomTaskUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ScheduleBlockCreateManyUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    type: $Enums.TimeBlockType
    startTime: number
    endTime: number
  }

  export type RoomQuietBlockCreateManySetUserInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    roomId: string
  }

  export type TaskPreferenceCreateManyUserInput = {
    id?: string
    priority: number
    taskId: string
  }

  export type AssignedTaskCreateManyUserInput = {
    id?: string
    RoomTaskId: string
    difficulty: number
    roomId: string
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type ScheduleBlockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleBlockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
  }

  export type RoomQuietBlockUpdateWithoutSetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutQuietTimeBlocksNestedInput
  }

  export type RoomQuietBlockUncheckedUpdateWithoutSetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomQuietBlockUncheckedUpdateManyWithoutSetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    task?: RoomTaskUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type TaskPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignedTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomTask?: RoomTaskUpdateOneRequiredWithoutAssignedTaskNestedInput
    room?: RoomUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type AssignedTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoomInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workLoad?: number
  }

  export type RoomQuietBlockCreateManyRoomInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: number
    endTime: number
    setByUserId: string
  }

  export type RoomTaskCreateManyRoomInput = {
    id?: string
    title: string
    difficulty: number
    estimatedTime: number
  }

  export type AssignedTaskCreateManyRoomInput = {
    id?: string
    RoomTaskId: string
    userId: string
    difficulty: number
    startDateTime: Date | string
    endDateTime: Date | string
  }

  export type UserUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
    ownedRoom?: RoomUncheckedUpdateOneWithoutOwnerNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    createdQuietBlock?: RoomQuietBlockUncheckedUpdateManyWithoutSetUserNestedInput
    taskPreferences?: TaskPreferenceUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: AssignedTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workLoad?: IntFieldUpdateOperationsInput | number
  }

  export type RoomQuietBlockUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    setUser?: UserUpdateOneRequiredWithoutCreatedQuietBlockNestedInput
  }

  export type RoomQuietBlockUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    setByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomQuietBlockUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    setByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTaskUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    preferences?: TaskPreferenceUpdateManyWithoutTaskNestedInput
    assignedTask?: AssignedTaskUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
    preferences?: TaskPreferenceUncheckedUpdateManyWithoutTaskNestedInput
    assignedTask?: AssignedTaskUncheckedUpdateOneWithoutRoomTaskNestedInput
  }

  export type RoomTaskUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    estimatedTime?: IntFieldUpdateOperationsInput | number
  }

  export type AssignedTaskUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomTask?: RoomTaskUpdateOneRequiredWithoutAssignedTaskNestedInput
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type AssignedTaskUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTaskUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    RoomTaskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskPreferenceCreateManyTaskInput = {
    id?: string
    priority: number
    userId: string
  }

  export type TaskPreferenceUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTaskPreferencesNestedInput
  }

  export type TaskPreferenceUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPreferenceUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}