
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompanyLog
 * 
 */
export type CompanyLog = $Result.DefaultSelection<Prisma.$CompanyLogPayload>
/**
 * Model CompanyLegalInformation
 * 
 */
export type CompanyLegalInformation = $Result.DefaultSelection<Prisma.$CompanyLegalInformationPayload>
/**
 * Model CompanySubscription
 * 
 */
export type CompanySubscription = $Result.DefaultSelection<Prisma.$CompanySubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const companySuscrptionType: {
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM',
  ENTERPRISE: 'ENTERPRISE'
};

export type companySuscrptionType = (typeof companySuscrptionType)[keyof typeof companySuscrptionType]

}

export type companySuscrptionType = $Enums.companySuscrptionType

export const companySuscrptionType: typeof $Enums.companySuscrptionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyLog`: Exposes CRUD operations for the **CompanyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyLogs
    * const companyLogs = await prisma.companyLog.findMany()
    * ```
    */
  get companyLog(): Prisma.CompanyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyLegalInformation`: Exposes CRUD operations for the **CompanyLegalInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyLegalInformations
    * const companyLegalInformations = await prisma.companyLegalInformation.findMany()
    * ```
    */
  get companyLegalInformation(): Prisma.CompanyLegalInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companySubscription`: Exposes CRUD operations for the **CompanySubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySubscriptions
    * const companySubscriptions = await prisma.companySubscription.findMany()
    * ```
    */
  get companySubscription(): Prisma.CompanySubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Company: 'Company',
    CompanyLog: 'CompanyLog',
    CompanyLegalInformation: 'CompanyLegalInformation',
    CompanySubscription: 'CompanySubscription'
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
      modelProps: "company" | "companyLog" | "companyLegalInformation" | "companySubscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanyLog: {
        payload: Prisma.$CompanyLogPayload<ExtArgs>
        fields: Prisma.CompanyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          findFirst: {
            args: Prisma.CompanyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          findMany: {
            args: Prisma.CompanyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>[]
          }
          create: {
            args: Prisma.CompanyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          createMany: {
            args: Prisma.CompanyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>[]
          }
          delete: {
            args: Prisma.CompanyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          update: {
            args: Prisma.CompanyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          deleteMany: {
            args: Prisma.CompanyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>[]
          }
          upsert: {
            args: Prisma.CompanyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLogPayload>
          }
          aggregate: {
            args: Prisma.CompanyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyLog>
          }
          groupBy: {
            args: Prisma.CompanyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyLogCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyLogCountAggregateOutputType> | number
          }
        }
      }
      CompanyLegalInformation: {
        payload: Prisma.$CompanyLegalInformationPayload<ExtArgs>
        fields: Prisma.CompanyLegalInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyLegalInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyLegalInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          findFirst: {
            args: Prisma.CompanyLegalInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyLegalInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          findMany: {
            args: Prisma.CompanyLegalInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>[]
          }
          create: {
            args: Prisma.CompanyLegalInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          createMany: {
            args: Prisma.CompanyLegalInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyLegalInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>[]
          }
          delete: {
            args: Prisma.CompanyLegalInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          update: {
            args: Prisma.CompanyLegalInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          deleteMany: {
            args: Prisma.CompanyLegalInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyLegalInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyLegalInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>[]
          }
          upsert: {
            args: Prisma.CompanyLegalInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLegalInformationPayload>
          }
          aggregate: {
            args: Prisma.CompanyLegalInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyLegalInformation>
          }
          groupBy: {
            args: Prisma.CompanyLegalInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyLegalInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyLegalInformationCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyLegalInformationCountAggregateOutputType> | number
          }
        }
      }
      CompanySubscription: {
        payload: Prisma.$CompanySubscriptionPayload<ExtArgs>
        fields: Prisma.CompanySubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          findFirst: {
            args: Prisma.CompanySubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          findMany: {
            args: Prisma.CompanySubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>[]
          }
          create: {
            args: Prisma.CompanySubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          createMany: {
            args: Prisma.CompanySubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>[]
          }
          delete: {
            args: Prisma.CompanySubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          update: {
            args: Prisma.CompanySubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.CompanySubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.CompanySubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySubscriptionPayload>
          }
          aggregate: {
            args: Prisma.CompanySubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySubscription>
          }
          groupBy: {
            args: Prisma.CompanySubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySubscriptionCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    company?: CompanyOmit
    companyLog?: CompanyLogOmit
    companyLegalInformation?: CompanyLegalInformationOmit
    companySubscription?: CompanySubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    logs: number
    subscriptions: number
    information: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | CompanyCountOutputTypeCountLogsArgs
    subscriptions?: boolean | CompanyCountOutputTypeCountSubscriptionsArgs
    information?: boolean | CompanyCountOutputTypeCountInformationArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyLogWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySubscriptionWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyLegalInformationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    database: string | null
    active: boolean | null
    session: boolean | null
    scannedQR: boolean | null
    phoneWhatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    database: string | null
    active: boolean | null
    session: boolean | null
    scannedQR: boolean | null
    phoneWhatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    database: number
    active: number
    session: number
    scannedQR: number
    phoneWhatsapp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    database?: true
    active?: true
    session?: true
    scannedQR?: true
    phoneWhatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    database?: true
    active?: true
    session?: true
    scannedQR?: true
    phoneWhatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    database?: true
    active?: true
    session?: true
    scannedQR?: true
    phoneWhatsapp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    database: string
    active: boolean
    session: boolean
    scannedQR: boolean
    phoneWhatsapp: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    database?: boolean
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | Company$logsArgs<ExtArgs>
    subscriptions?: boolean | Company$subscriptionsArgs<ExtArgs>
    information?: boolean | Company$informationArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    database?: boolean
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    database?: boolean
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    database?: boolean
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "database" | "active" | "session" | "scannedQR" | "phoneWhatsapp" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Company$logsArgs<ExtArgs>
    subscriptions?: boolean | Company$subscriptionsArgs<ExtArgs>
    information?: boolean | Company$informationArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      logs: Prisma.$CompanyLogPayload<ExtArgs>[]
      subscriptions: Prisma.$CompanySubscriptionPayload<ExtArgs>[]
      information: Prisma.$CompanyLegalInformationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      database: string
      active: boolean
      session: boolean
      scannedQR: boolean
      phoneWhatsapp: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Company$logsArgs<ExtArgs> = {}>(args?: Subset<T, Company$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Company$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Company$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    information<T extends Company$informationArgs<ExtArgs> = {}>(args?: Subset<T, Company$informationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly database: FieldRef<"Company", 'String'>
    readonly active: FieldRef<"Company", 'Boolean'>
    readonly session: FieldRef<"Company", 'Boolean'>
    readonly scannedQR: FieldRef<"Company", 'Boolean'>
    readonly phoneWhatsapp: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.logs
   */
  export type Company$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    where?: CompanyLogWhereInput
    orderBy?: CompanyLogOrderByWithRelationInput | CompanyLogOrderByWithRelationInput[]
    cursor?: CompanyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyLogScalarFieldEnum | CompanyLogScalarFieldEnum[]
  }

  /**
   * Company.subscriptions
   */
  export type Company$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    where?: CompanySubscriptionWhereInput
    orderBy?: CompanySubscriptionOrderByWithRelationInput | CompanySubscriptionOrderByWithRelationInput[]
    cursor?: CompanySubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanySubscriptionScalarFieldEnum | CompanySubscriptionScalarFieldEnum[]
  }

  /**
   * Company.information
   */
  export type Company$informationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    where?: CompanyLegalInformationWhereInput
    orderBy?: CompanyLegalInformationOrderByWithRelationInput | CompanyLegalInformationOrderByWithRelationInput[]
    cursor?: CompanyLegalInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyLegalInformationScalarFieldEnum | CompanyLegalInformationScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompanyLog
   */

  export type AggregateCompanyLog = {
    _count: CompanyLogCountAggregateOutputType | null
    _avg: CompanyLogAvgAggregateOutputType | null
    _sum: CompanyLogSumAggregateOutputType | null
    _min: CompanyLogMinAggregateOutputType | null
    _max: CompanyLogMaxAggregateOutputType | null
  }

  export type CompanyLogAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyLogSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyLogMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CompanyLogMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CompanyLogCountAggregateOutputType = {
    id: number
    companyId: number
    action: number
    description: number
    createdAt: number
    _all: number
  }


  export type CompanyLogAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyLogSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyLogMinAggregateInputType = {
    id?: true
    companyId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type CompanyLogMaxAggregateInputType = {
    id?: true
    companyId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type CompanyLogCountAggregateInputType = {
    id?: true
    companyId?: true
    action?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLog to aggregate.
     */
    where?: CompanyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLogs to fetch.
     */
    orderBy?: CompanyLogOrderByWithRelationInput | CompanyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyLogs
    **/
    _count?: true | CompanyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyLogMaxAggregateInputType
  }

  export type GetCompanyLogAggregateType<T extends CompanyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyLog[P]>
      : GetScalarType<T[P], AggregateCompanyLog[P]>
  }




  export type CompanyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyLogWhereInput
    orderBy?: CompanyLogOrderByWithAggregationInput | CompanyLogOrderByWithAggregationInput[]
    by: CompanyLogScalarFieldEnum[] | CompanyLogScalarFieldEnum
    having?: CompanyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyLogCountAggregateInputType | true
    _avg?: CompanyLogAvgAggregateInputType
    _sum?: CompanyLogSumAggregateInputType
    _min?: CompanyLogMinAggregateInputType
    _max?: CompanyLogMaxAggregateInputType
  }

  export type CompanyLogGroupByOutputType = {
    id: number
    companyId: number
    action: string
    description: string
    createdAt: Date
    _count: CompanyLogCountAggregateOutputType | null
    _avg: CompanyLogAvgAggregateOutputType | null
    _sum: CompanyLogSumAggregateOutputType | null
    _min: CompanyLogMinAggregateOutputType | null
    _max: CompanyLogMaxAggregateOutputType | null
  }

  type GetCompanyLogGroupByPayload<T extends CompanyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyLogGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyLogGroupByOutputType[P]>
        }
      >
    >


  export type CompanyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLog"]>

  export type CompanyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLog"]>

  export type CompanyLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLog"]>

  export type CompanyLogSelectScalar = {
    id?: boolean
    companyId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CompanyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "action" | "description" | "createdAt", ExtArgs["result"]["companyLog"]>
  export type CompanyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyLog"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      action: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["companyLog"]>
    composites: {}
  }

  type CompanyLogGetPayload<S extends boolean | null | undefined | CompanyLogDefaultArgs> = $Result.GetResult<Prisma.$CompanyLogPayload, S>

  type CompanyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyLogCountAggregateInputType | true
    }

  export interface CompanyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyLog'], meta: { name: 'CompanyLog' } }
    /**
     * Find zero or one CompanyLog that matches the filter.
     * @param {CompanyLogFindUniqueArgs} args - Arguments to find a CompanyLog
     * @example
     * // Get one CompanyLog
     * const companyLog = await prisma.companyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyLogFindUniqueArgs>(args: SelectSubset<T, CompanyLogFindUniqueArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyLogFindUniqueOrThrowArgs} args - Arguments to find a CompanyLog
     * @example
     * // Get one CompanyLog
     * const companyLog = await prisma.companyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogFindFirstArgs} args - Arguments to find a CompanyLog
     * @example
     * // Get one CompanyLog
     * const companyLog = await prisma.companyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyLogFindFirstArgs>(args?: SelectSubset<T, CompanyLogFindFirstArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogFindFirstOrThrowArgs} args - Arguments to find a CompanyLog
     * @example
     * // Get one CompanyLog
     * const companyLog = await prisma.companyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyLogs
     * const companyLogs = await prisma.companyLog.findMany()
     * 
     * // Get first 10 CompanyLogs
     * const companyLogs = await prisma.companyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyLogWithIdOnly = await prisma.companyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyLogFindManyArgs>(args?: SelectSubset<T, CompanyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyLog.
     * @param {CompanyLogCreateArgs} args - Arguments to create a CompanyLog.
     * @example
     * // Create one CompanyLog
     * const CompanyLog = await prisma.companyLog.create({
     *   data: {
     *     // ... data to create a CompanyLog
     *   }
     * })
     * 
     */
    create<T extends CompanyLogCreateArgs>(args: SelectSubset<T, CompanyLogCreateArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyLogs.
     * @param {CompanyLogCreateManyArgs} args - Arguments to create many CompanyLogs.
     * @example
     * // Create many CompanyLogs
     * const companyLog = await prisma.companyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyLogCreateManyArgs>(args?: SelectSubset<T, CompanyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyLogs and returns the data saved in the database.
     * @param {CompanyLogCreateManyAndReturnArgs} args - Arguments to create many CompanyLogs.
     * @example
     * // Create many CompanyLogs
     * const companyLog = await prisma.companyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyLogs and only return the `id`
     * const companyLogWithIdOnly = await prisma.companyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyLog.
     * @param {CompanyLogDeleteArgs} args - Arguments to delete one CompanyLog.
     * @example
     * // Delete one CompanyLog
     * const CompanyLog = await prisma.companyLog.delete({
     *   where: {
     *     // ... filter to delete one CompanyLog
     *   }
     * })
     * 
     */
    delete<T extends CompanyLogDeleteArgs>(args: SelectSubset<T, CompanyLogDeleteArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyLog.
     * @param {CompanyLogUpdateArgs} args - Arguments to update one CompanyLog.
     * @example
     * // Update one CompanyLog
     * const companyLog = await prisma.companyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyLogUpdateArgs>(args: SelectSubset<T, CompanyLogUpdateArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyLogs.
     * @param {CompanyLogDeleteManyArgs} args - Arguments to filter CompanyLogs to delete.
     * @example
     * // Delete a few CompanyLogs
     * const { count } = await prisma.companyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyLogDeleteManyArgs>(args?: SelectSubset<T, CompanyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyLogs
     * const companyLog = await prisma.companyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyLogUpdateManyArgs>(args: SelectSubset<T, CompanyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLogs and returns the data updated in the database.
     * @param {CompanyLogUpdateManyAndReturnArgs} args - Arguments to update many CompanyLogs.
     * @example
     * // Update many CompanyLogs
     * const companyLog = await prisma.companyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyLogs and only return the `id`
     * const companyLogWithIdOnly = await prisma.companyLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyLog.
     * @param {CompanyLogUpsertArgs} args - Arguments to update or create a CompanyLog.
     * @example
     * // Update or create a CompanyLog
     * const companyLog = await prisma.companyLog.upsert({
     *   create: {
     *     // ... data to create a CompanyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyLog we want to update
     *   }
     * })
     */
    upsert<T extends CompanyLogUpsertArgs>(args: SelectSubset<T, CompanyLogUpsertArgs<ExtArgs>>): Prisma__CompanyLogClient<$Result.GetResult<Prisma.$CompanyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogCountArgs} args - Arguments to filter CompanyLogs to count.
     * @example
     * // Count the number of CompanyLogs
     * const count = await prisma.companyLog.count({
     *   where: {
     *     // ... the filter for the CompanyLogs we want to count
     *   }
     * })
    **/
    count<T extends CompanyLogCountArgs>(
      args?: Subset<T, CompanyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyLogAggregateArgs>(args: Subset<T, CompanyLogAggregateArgs>): Prisma.PrismaPromise<GetCompanyLogAggregateType<T>>

    /**
     * Group by CompanyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLogGroupByArgs} args - Group by arguments.
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
      T extends CompanyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyLogGroupByArgs['orderBy'] }
        : { orderBy?: CompanyLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyLog model
   */
  readonly fields: CompanyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyLog model
   */
  interface CompanyLogFieldRefs {
    readonly id: FieldRef<"CompanyLog", 'Int'>
    readonly companyId: FieldRef<"CompanyLog", 'Int'>
    readonly action: FieldRef<"CompanyLog", 'String'>
    readonly description: FieldRef<"CompanyLog", 'String'>
    readonly createdAt: FieldRef<"CompanyLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyLog findUnique
   */
  export type CompanyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLog to fetch.
     */
    where: CompanyLogWhereUniqueInput
  }

  /**
   * CompanyLog findUniqueOrThrow
   */
  export type CompanyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLog to fetch.
     */
    where: CompanyLogWhereUniqueInput
  }

  /**
   * CompanyLog findFirst
   */
  export type CompanyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLog to fetch.
     */
    where?: CompanyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLogs to fetch.
     */
    orderBy?: CompanyLogOrderByWithRelationInput | CompanyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLogs.
     */
    cursor?: CompanyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLogs.
     */
    distinct?: CompanyLogScalarFieldEnum | CompanyLogScalarFieldEnum[]
  }

  /**
   * CompanyLog findFirstOrThrow
   */
  export type CompanyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLog to fetch.
     */
    where?: CompanyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLogs to fetch.
     */
    orderBy?: CompanyLogOrderByWithRelationInput | CompanyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLogs.
     */
    cursor?: CompanyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLogs.
     */
    distinct?: CompanyLogScalarFieldEnum | CompanyLogScalarFieldEnum[]
  }

  /**
   * CompanyLog findMany
   */
  export type CompanyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLogs to fetch.
     */
    where?: CompanyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLogs to fetch.
     */
    orderBy?: CompanyLogOrderByWithRelationInput | CompanyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyLogs.
     */
    cursor?: CompanyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLogs.
     */
    skip?: number
    distinct?: CompanyLogScalarFieldEnum | CompanyLogScalarFieldEnum[]
  }

  /**
   * CompanyLog create
   */
  export type CompanyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyLog.
     */
    data: XOR<CompanyLogCreateInput, CompanyLogUncheckedCreateInput>
  }

  /**
   * CompanyLog createMany
   */
  export type CompanyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyLogs.
     */
    data: CompanyLogCreateManyInput | CompanyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyLog createManyAndReturn
   */
  export type CompanyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyLogs.
     */
    data: CompanyLogCreateManyInput | CompanyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyLog update
   */
  export type CompanyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyLog.
     */
    data: XOR<CompanyLogUpdateInput, CompanyLogUncheckedUpdateInput>
    /**
     * Choose, which CompanyLog to update.
     */
    where: CompanyLogWhereUniqueInput
  }

  /**
   * CompanyLog updateMany
   */
  export type CompanyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyLogs.
     */
    data: XOR<CompanyLogUpdateManyMutationInput, CompanyLogUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLogs to update
     */
    where?: CompanyLogWhereInput
    /**
     * Limit how many CompanyLogs to update.
     */
    limit?: number
  }

  /**
   * CompanyLog updateManyAndReturn
   */
  export type CompanyLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * The data used to update CompanyLogs.
     */
    data: XOR<CompanyLogUpdateManyMutationInput, CompanyLogUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLogs to update
     */
    where?: CompanyLogWhereInput
    /**
     * Limit how many CompanyLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyLog upsert
   */
  export type CompanyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyLog to update in case it exists.
     */
    where: CompanyLogWhereUniqueInput
    /**
     * In case the CompanyLog found by the `where` argument doesn't exist, create a new CompanyLog with this data.
     */
    create: XOR<CompanyLogCreateInput, CompanyLogUncheckedCreateInput>
    /**
     * In case the CompanyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyLogUpdateInput, CompanyLogUncheckedUpdateInput>
  }

  /**
   * CompanyLog delete
   */
  export type CompanyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
    /**
     * Filter which CompanyLog to delete.
     */
    where: CompanyLogWhereUniqueInput
  }

  /**
   * CompanyLog deleteMany
   */
  export type CompanyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLogs to delete
     */
    where?: CompanyLogWhereInput
    /**
     * Limit how many CompanyLogs to delete.
     */
    limit?: number
  }

  /**
   * CompanyLog without action
   */
  export type CompanyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLog
     */
    select?: CompanyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLog
     */
    omit?: CompanyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLogInclude<ExtArgs> | null
  }


  /**
   * Model CompanyLegalInformation
   */

  export type AggregateCompanyLegalInformation = {
    _count: CompanyLegalInformationCountAggregateOutputType | null
    _avg: CompanyLegalInformationAvgAggregateOutputType | null
    _sum: CompanyLegalInformationSumAggregateOutputType | null
    _min: CompanyLegalInformationMinAggregateOutputType | null
    _max: CompanyLegalInformationMaxAggregateOutputType | null
  }

  export type CompanyLegalInformationAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyLegalInformationSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanyLegalInformationMinAggregateOutputType = {
    id: number | null
    ownerName: string | null
    ownerPhone: string | null
    ownerEmail: string | null
    contactName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    rfc: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type CompanyLegalInformationMaxAggregateOutputType = {
    id: number | null
    ownerName: string | null
    ownerPhone: string | null
    ownerEmail: string | null
    contactName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    rfc: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type CompanyLegalInformationCountAggregateOutputType = {
    id: number
    ownerName: number
    ownerPhone: number
    ownerEmail: number
    contactName: number
    contactPhone: number
    contactEmail: number
    address: number
    rfc: number
    active: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type CompanyLegalInformationAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyLegalInformationSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanyLegalInformationMinAggregateInputType = {
    id?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    rfc?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyLegalInformationMaxAggregateInputType = {
    id?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    rfc?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyLegalInformationCountAggregateInputType = {
    id?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    rfc?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type CompanyLegalInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLegalInformation to aggregate.
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLegalInformations to fetch.
     */
    orderBy?: CompanyLegalInformationOrderByWithRelationInput | CompanyLegalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyLegalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLegalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLegalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyLegalInformations
    **/
    _count?: true | CompanyLegalInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyLegalInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyLegalInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyLegalInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyLegalInformationMaxAggregateInputType
  }

  export type GetCompanyLegalInformationAggregateType<T extends CompanyLegalInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyLegalInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyLegalInformation[P]>
      : GetScalarType<T[P], AggregateCompanyLegalInformation[P]>
  }




  export type CompanyLegalInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyLegalInformationWhereInput
    orderBy?: CompanyLegalInformationOrderByWithAggregationInput | CompanyLegalInformationOrderByWithAggregationInput[]
    by: CompanyLegalInformationScalarFieldEnum[] | CompanyLegalInformationScalarFieldEnum
    having?: CompanyLegalInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyLegalInformationCountAggregateInputType | true
    _avg?: CompanyLegalInformationAvgAggregateInputType
    _sum?: CompanyLegalInformationSumAggregateInputType
    _min?: CompanyLegalInformationMinAggregateInputType
    _max?: CompanyLegalInformationMaxAggregateInputType
  }

  export type CompanyLegalInformationGroupByOutputType = {
    id: number
    ownerName: string | null
    ownerPhone: string | null
    ownerEmail: string | null
    contactName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    rfc: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    companyId: number
    _count: CompanyLegalInformationCountAggregateOutputType | null
    _avg: CompanyLegalInformationAvgAggregateOutputType | null
    _sum: CompanyLegalInformationSumAggregateOutputType | null
    _min: CompanyLegalInformationMinAggregateOutputType | null
    _max: CompanyLegalInformationMaxAggregateOutputType | null
  }

  type GetCompanyLegalInformationGroupByPayload<T extends CompanyLegalInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyLegalInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyLegalInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyLegalInformationGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyLegalInformationGroupByOutputType[P]>
        }
      >
    >


  export type CompanyLegalInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    rfc?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLegalInformation"]>

  export type CompanyLegalInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    rfc?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLegalInformation"]>

  export type CompanyLegalInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    rfc?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyLegalInformation"]>

  export type CompanyLegalInformationSelectScalar = {
    id?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    rfc?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type CompanyLegalInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerName" | "ownerPhone" | "ownerEmail" | "contactName" | "contactPhone" | "contactEmail" | "address" | "rfc" | "active" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["companyLegalInformation"]>
  export type CompanyLegalInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyLegalInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyLegalInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyLegalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyLegalInformation"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerName: string | null
      ownerPhone: string | null
      ownerEmail: string | null
      contactName: string | null
      contactPhone: string | null
      contactEmail: string | null
      address: string | null
      rfc: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
      companyId: number
    }, ExtArgs["result"]["companyLegalInformation"]>
    composites: {}
  }

  type CompanyLegalInformationGetPayload<S extends boolean | null | undefined | CompanyLegalInformationDefaultArgs> = $Result.GetResult<Prisma.$CompanyLegalInformationPayload, S>

  type CompanyLegalInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyLegalInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyLegalInformationCountAggregateInputType | true
    }

  export interface CompanyLegalInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyLegalInformation'], meta: { name: 'CompanyLegalInformation' } }
    /**
     * Find zero or one CompanyLegalInformation that matches the filter.
     * @param {CompanyLegalInformationFindUniqueArgs} args - Arguments to find a CompanyLegalInformation
     * @example
     * // Get one CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyLegalInformationFindUniqueArgs>(args: SelectSubset<T, CompanyLegalInformationFindUniqueArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyLegalInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyLegalInformationFindUniqueOrThrowArgs} args - Arguments to find a CompanyLegalInformation
     * @example
     * // Get one CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyLegalInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyLegalInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLegalInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationFindFirstArgs} args - Arguments to find a CompanyLegalInformation
     * @example
     * // Get one CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyLegalInformationFindFirstArgs>(args?: SelectSubset<T, CompanyLegalInformationFindFirstArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLegalInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationFindFirstOrThrowArgs} args - Arguments to find a CompanyLegalInformation
     * @example
     * // Get one CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyLegalInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyLegalInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyLegalInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyLegalInformations
     * const companyLegalInformations = await prisma.companyLegalInformation.findMany()
     * 
     * // Get first 10 CompanyLegalInformations
     * const companyLegalInformations = await prisma.companyLegalInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyLegalInformationWithIdOnly = await prisma.companyLegalInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyLegalInformationFindManyArgs>(args?: SelectSubset<T, CompanyLegalInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyLegalInformation.
     * @param {CompanyLegalInformationCreateArgs} args - Arguments to create a CompanyLegalInformation.
     * @example
     * // Create one CompanyLegalInformation
     * const CompanyLegalInformation = await prisma.companyLegalInformation.create({
     *   data: {
     *     // ... data to create a CompanyLegalInformation
     *   }
     * })
     * 
     */
    create<T extends CompanyLegalInformationCreateArgs>(args: SelectSubset<T, CompanyLegalInformationCreateArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyLegalInformations.
     * @param {CompanyLegalInformationCreateManyArgs} args - Arguments to create many CompanyLegalInformations.
     * @example
     * // Create many CompanyLegalInformations
     * const companyLegalInformation = await prisma.companyLegalInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyLegalInformationCreateManyArgs>(args?: SelectSubset<T, CompanyLegalInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyLegalInformations and returns the data saved in the database.
     * @param {CompanyLegalInformationCreateManyAndReturnArgs} args - Arguments to create many CompanyLegalInformations.
     * @example
     * // Create many CompanyLegalInformations
     * const companyLegalInformation = await prisma.companyLegalInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyLegalInformations and only return the `id`
     * const companyLegalInformationWithIdOnly = await prisma.companyLegalInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyLegalInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyLegalInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyLegalInformation.
     * @param {CompanyLegalInformationDeleteArgs} args - Arguments to delete one CompanyLegalInformation.
     * @example
     * // Delete one CompanyLegalInformation
     * const CompanyLegalInformation = await prisma.companyLegalInformation.delete({
     *   where: {
     *     // ... filter to delete one CompanyLegalInformation
     *   }
     * })
     * 
     */
    delete<T extends CompanyLegalInformationDeleteArgs>(args: SelectSubset<T, CompanyLegalInformationDeleteArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyLegalInformation.
     * @param {CompanyLegalInformationUpdateArgs} args - Arguments to update one CompanyLegalInformation.
     * @example
     * // Update one CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyLegalInformationUpdateArgs>(args: SelectSubset<T, CompanyLegalInformationUpdateArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyLegalInformations.
     * @param {CompanyLegalInformationDeleteManyArgs} args - Arguments to filter CompanyLegalInformations to delete.
     * @example
     * // Delete a few CompanyLegalInformations
     * const { count } = await prisma.companyLegalInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyLegalInformationDeleteManyArgs>(args?: SelectSubset<T, CompanyLegalInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLegalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyLegalInformations
     * const companyLegalInformation = await prisma.companyLegalInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyLegalInformationUpdateManyArgs>(args: SelectSubset<T, CompanyLegalInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLegalInformations and returns the data updated in the database.
     * @param {CompanyLegalInformationUpdateManyAndReturnArgs} args - Arguments to update many CompanyLegalInformations.
     * @example
     * // Update many CompanyLegalInformations
     * const companyLegalInformation = await prisma.companyLegalInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyLegalInformations and only return the `id`
     * const companyLegalInformationWithIdOnly = await prisma.companyLegalInformation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyLegalInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyLegalInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyLegalInformation.
     * @param {CompanyLegalInformationUpsertArgs} args - Arguments to update or create a CompanyLegalInformation.
     * @example
     * // Update or create a CompanyLegalInformation
     * const companyLegalInformation = await prisma.companyLegalInformation.upsert({
     *   create: {
     *     // ... data to create a CompanyLegalInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyLegalInformation we want to update
     *   }
     * })
     */
    upsert<T extends CompanyLegalInformationUpsertArgs>(args: SelectSubset<T, CompanyLegalInformationUpsertArgs<ExtArgs>>): Prisma__CompanyLegalInformationClient<$Result.GetResult<Prisma.$CompanyLegalInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyLegalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationCountArgs} args - Arguments to filter CompanyLegalInformations to count.
     * @example
     * // Count the number of CompanyLegalInformations
     * const count = await prisma.companyLegalInformation.count({
     *   where: {
     *     // ... the filter for the CompanyLegalInformations we want to count
     *   }
     * })
    **/
    count<T extends CompanyLegalInformationCountArgs>(
      args?: Subset<T, CompanyLegalInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyLegalInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyLegalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyLegalInformationAggregateArgs>(args: Subset<T, CompanyLegalInformationAggregateArgs>): Prisma.PrismaPromise<GetCompanyLegalInformationAggregateType<T>>

    /**
     * Group by CompanyLegalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLegalInformationGroupByArgs} args - Group by arguments.
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
      T extends CompanyLegalInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyLegalInformationGroupByArgs['orderBy'] }
        : { orderBy?: CompanyLegalInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyLegalInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyLegalInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyLegalInformation model
   */
  readonly fields: CompanyLegalInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyLegalInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyLegalInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyLegalInformation model
   */
  interface CompanyLegalInformationFieldRefs {
    readonly id: FieldRef<"CompanyLegalInformation", 'Int'>
    readonly ownerName: FieldRef<"CompanyLegalInformation", 'String'>
    readonly ownerPhone: FieldRef<"CompanyLegalInformation", 'String'>
    readonly ownerEmail: FieldRef<"CompanyLegalInformation", 'String'>
    readonly contactName: FieldRef<"CompanyLegalInformation", 'String'>
    readonly contactPhone: FieldRef<"CompanyLegalInformation", 'String'>
    readonly contactEmail: FieldRef<"CompanyLegalInformation", 'String'>
    readonly address: FieldRef<"CompanyLegalInformation", 'String'>
    readonly rfc: FieldRef<"CompanyLegalInformation", 'String'>
    readonly active: FieldRef<"CompanyLegalInformation", 'Boolean'>
    readonly createdAt: FieldRef<"CompanyLegalInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyLegalInformation", 'DateTime'>
    readonly companyId: FieldRef<"CompanyLegalInformation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompanyLegalInformation findUnique
   */
  export type CompanyLegalInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLegalInformation to fetch.
     */
    where: CompanyLegalInformationWhereUniqueInput
  }

  /**
   * CompanyLegalInformation findUniqueOrThrow
   */
  export type CompanyLegalInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLegalInformation to fetch.
     */
    where: CompanyLegalInformationWhereUniqueInput
  }

  /**
   * CompanyLegalInformation findFirst
   */
  export type CompanyLegalInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLegalInformation to fetch.
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLegalInformations to fetch.
     */
    orderBy?: CompanyLegalInformationOrderByWithRelationInput | CompanyLegalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLegalInformations.
     */
    cursor?: CompanyLegalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLegalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLegalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLegalInformations.
     */
    distinct?: CompanyLegalInformationScalarFieldEnum | CompanyLegalInformationScalarFieldEnum[]
  }

  /**
   * CompanyLegalInformation findFirstOrThrow
   */
  export type CompanyLegalInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLegalInformation to fetch.
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLegalInformations to fetch.
     */
    orderBy?: CompanyLegalInformationOrderByWithRelationInput | CompanyLegalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLegalInformations.
     */
    cursor?: CompanyLegalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLegalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLegalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLegalInformations.
     */
    distinct?: CompanyLegalInformationScalarFieldEnum | CompanyLegalInformationScalarFieldEnum[]
  }

  /**
   * CompanyLegalInformation findMany
   */
  export type CompanyLegalInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyLegalInformations to fetch.
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLegalInformations to fetch.
     */
    orderBy?: CompanyLegalInformationOrderByWithRelationInput | CompanyLegalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyLegalInformations.
     */
    cursor?: CompanyLegalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLegalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLegalInformations.
     */
    skip?: number
    distinct?: CompanyLegalInformationScalarFieldEnum | CompanyLegalInformationScalarFieldEnum[]
  }

  /**
   * CompanyLegalInformation create
   */
  export type CompanyLegalInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyLegalInformation.
     */
    data: XOR<CompanyLegalInformationCreateInput, CompanyLegalInformationUncheckedCreateInput>
  }

  /**
   * CompanyLegalInformation createMany
   */
  export type CompanyLegalInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyLegalInformations.
     */
    data: CompanyLegalInformationCreateManyInput | CompanyLegalInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyLegalInformation createManyAndReturn
   */
  export type CompanyLegalInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyLegalInformations.
     */
    data: CompanyLegalInformationCreateManyInput | CompanyLegalInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyLegalInformation update
   */
  export type CompanyLegalInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyLegalInformation.
     */
    data: XOR<CompanyLegalInformationUpdateInput, CompanyLegalInformationUncheckedUpdateInput>
    /**
     * Choose, which CompanyLegalInformation to update.
     */
    where: CompanyLegalInformationWhereUniqueInput
  }

  /**
   * CompanyLegalInformation updateMany
   */
  export type CompanyLegalInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyLegalInformations.
     */
    data: XOR<CompanyLegalInformationUpdateManyMutationInput, CompanyLegalInformationUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLegalInformations to update
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * Limit how many CompanyLegalInformations to update.
     */
    limit?: number
  }

  /**
   * CompanyLegalInformation updateManyAndReturn
   */
  export type CompanyLegalInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * The data used to update CompanyLegalInformations.
     */
    data: XOR<CompanyLegalInformationUpdateManyMutationInput, CompanyLegalInformationUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLegalInformations to update
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * Limit how many CompanyLegalInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyLegalInformation upsert
   */
  export type CompanyLegalInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyLegalInformation to update in case it exists.
     */
    where: CompanyLegalInformationWhereUniqueInput
    /**
     * In case the CompanyLegalInformation found by the `where` argument doesn't exist, create a new CompanyLegalInformation with this data.
     */
    create: XOR<CompanyLegalInformationCreateInput, CompanyLegalInformationUncheckedCreateInput>
    /**
     * In case the CompanyLegalInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyLegalInformationUpdateInput, CompanyLegalInformationUncheckedUpdateInput>
  }

  /**
   * CompanyLegalInformation delete
   */
  export type CompanyLegalInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
    /**
     * Filter which CompanyLegalInformation to delete.
     */
    where: CompanyLegalInformationWhereUniqueInput
  }

  /**
   * CompanyLegalInformation deleteMany
   */
  export type CompanyLegalInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLegalInformations to delete
     */
    where?: CompanyLegalInformationWhereInput
    /**
     * Limit how many CompanyLegalInformations to delete.
     */
    limit?: number
  }

  /**
   * CompanyLegalInformation without action
   */
  export type CompanyLegalInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLegalInformation
     */
    select?: CompanyLegalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLegalInformation
     */
    omit?: CompanyLegalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyLegalInformationInclude<ExtArgs> | null
  }


  /**
   * Model CompanySubscription
   */

  export type AggregateCompanySubscription = {
    _count: CompanySubscriptionCountAggregateOutputType | null
    _avg: CompanySubscriptionAvgAggregateOutputType | null
    _sum: CompanySubscriptionSumAggregateOutputType | null
    _min: CompanySubscriptionMinAggregateOutputType | null
    _max: CompanySubscriptionMaxAggregateOutputType | null
  }

  export type CompanySubscriptionAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanySubscriptionSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CompanySubscriptionMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    subscriptionType: $Enums.companySuscrptionType | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanySubscriptionMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    subscriptionType: $Enums.companySuscrptionType | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanySubscriptionCountAggregateOutputType = {
    id: number
    companyId: number
    subscriptionType: number
    startDate: number
    endDate: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanySubscriptionAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanySubscriptionSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CompanySubscriptionMinAggregateInputType = {
    id?: true
    companyId?: true
    subscriptionType?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanySubscriptionMaxAggregateInputType = {
    id?: true
    companyId?: true
    subscriptionType?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanySubscriptionCountAggregateInputType = {
    id?: true
    companyId?: true
    subscriptionType?: true
    startDate?: true
    endDate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanySubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySubscription to aggregate.
     */
    where?: CompanySubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySubscriptions to fetch.
     */
    orderBy?: CompanySubscriptionOrderByWithRelationInput | CompanySubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySubscriptions
    **/
    _count?: true | CompanySubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySubscriptionMaxAggregateInputType
  }

  export type GetCompanySubscriptionAggregateType<T extends CompanySubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySubscription[P]>
      : GetScalarType<T[P], AggregateCompanySubscription[P]>
  }




  export type CompanySubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySubscriptionWhereInput
    orderBy?: CompanySubscriptionOrderByWithAggregationInput | CompanySubscriptionOrderByWithAggregationInput[]
    by: CompanySubscriptionScalarFieldEnum[] | CompanySubscriptionScalarFieldEnum
    having?: CompanySubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySubscriptionCountAggregateInputType | true
    _avg?: CompanySubscriptionAvgAggregateInputType
    _sum?: CompanySubscriptionSumAggregateInputType
    _min?: CompanySubscriptionMinAggregateInputType
    _max?: CompanySubscriptionMaxAggregateInputType
  }

  export type CompanySubscriptionGroupByOutputType = {
    id: number
    companyId: number
    subscriptionType: $Enums.companySuscrptionType
    startDate: Date
    endDate: Date | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompanySubscriptionCountAggregateOutputType | null
    _avg: CompanySubscriptionAvgAggregateOutputType | null
    _sum: CompanySubscriptionSumAggregateOutputType | null
    _min: CompanySubscriptionMinAggregateOutputType | null
    _max: CompanySubscriptionMaxAggregateOutputType | null
  }

  type GetCompanySubscriptionGroupByPayload<T extends CompanySubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type CompanySubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    subscriptionType?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySubscription"]>

  export type CompanySubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    subscriptionType?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySubscription"]>

  export type CompanySubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    subscriptionType?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySubscription"]>

  export type CompanySubscriptionSelectScalar = {
    id?: boolean
    companyId?: boolean
    subscriptionType?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanySubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "subscriptionType" | "startDate" | "endDate" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["companySubscription"]>
  export type CompanySubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanySubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanySubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanySubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySubscription"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      subscriptionType: $Enums.companySuscrptionType
      startDate: Date
      endDate: Date | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companySubscription"]>
    composites: {}
  }

  type CompanySubscriptionGetPayload<S extends boolean | null | undefined | CompanySubscriptionDefaultArgs> = $Result.GetResult<Prisma.$CompanySubscriptionPayload, S>

  type CompanySubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySubscriptionCountAggregateInputType | true
    }

  export interface CompanySubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySubscription'], meta: { name: 'CompanySubscription' } }
    /**
     * Find zero or one CompanySubscription that matches the filter.
     * @param {CompanySubscriptionFindUniqueArgs} args - Arguments to find a CompanySubscription
     * @example
     * // Get one CompanySubscription
     * const companySubscription = await prisma.companySubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySubscriptionFindUniqueArgs>(args: SelectSubset<T, CompanySubscriptionFindUniqueArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanySubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySubscriptionFindUniqueOrThrowArgs} args - Arguments to find a CompanySubscription
     * @example
     * // Get one CompanySubscription
     * const companySubscription = await prisma.companySubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionFindFirstArgs} args - Arguments to find a CompanySubscription
     * @example
     * // Get one CompanySubscription
     * const companySubscription = await prisma.companySubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySubscriptionFindFirstArgs>(args?: SelectSubset<T, CompanySubscriptionFindFirstArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionFindFirstOrThrowArgs} args - Arguments to find a CompanySubscription
     * @example
     * // Get one CompanySubscription
     * const companySubscription = await prisma.companySubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanySubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySubscriptions
     * const companySubscriptions = await prisma.companySubscription.findMany()
     * 
     * // Get first 10 CompanySubscriptions
     * const companySubscriptions = await prisma.companySubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companySubscriptionWithIdOnly = await prisma.companySubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanySubscriptionFindManyArgs>(args?: SelectSubset<T, CompanySubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanySubscription.
     * @param {CompanySubscriptionCreateArgs} args - Arguments to create a CompanySubscription.
     * @example
     * // Create one CompanySubscription
     * const CompanySubscription = await prisma.companySubscription.create({
     *   data: {
     *     // ... data to create a CompanySubscription
     *   }
     * })
     * 
     */
    create<T extends CompanySubscriptionCreateArgs>(args: SelectSubset<T, CompanySubscriptionCreateArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanySubscriptions.
     * @param {CompanySubscriptionCreateManyArgs} args - Arguments to create many CompanySubscriptions.
     * @example
     * // Create many CompanySubscriptions
     * const companySubscription = await prisma.companySubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySubscriptionCreateManyArgs>(args?: SelectSubset<T, CompanySubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySubscriptions and returns the data saved in the database.
     * @param {CompanySubscriptionCreateManyAndReturnArgs} args - Arguments to create many CompanySubscriptions.
     * @example
     * // Create many CompanySubscriptions
     * const companySubscription = await prisma.companySubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySubscriptions and only return the `id`
     * const companySubscriptionWithIdOnly = await prisma.companySubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanySubscription.
     * @param {CompanySubscriptionDeleteArgs} args - Arguments to delete one CompanySubscription.
     * @example
     * // Delete one CompanySubscription
     * const CompanySubscription = await prisma.companySubscription.delete({
     *   where: {
     *     // ... filter to delete one CompanySubscription
     *   }
     * })
     * 
     */
    delete<T extends CompanySubscriptionDeleteArgs>(args: SelectSubset<T, CompanySubscriptionDeleteArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanySubscription.
     * @param {CompanySubscriptionUpdateArgs} args - Arguments to update one CompanySubscription.
     * @example
     * // Update one CompanySubscription
     * const companySubscription = await prisma.companySubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySubscriptionUpdateArgs>(args: SelectSubset<T, CompanySubscriptionUpdateArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanySubscriptions.
     * @param {CompanySubscriptionDeleteManyArgs} args - Arguments to filter CompanySubscriptions to delete.
     * @example
     * // Delete a few CompanySubscriptions
     * const { count } = await prisma.companySubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySubscriptionDeleteManyArgs>(args?: SelectSubset<T, CompanySubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySubscriptions
     * const companySubscription = await prisma.companySubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySubscriptionUpdateManyArgs>(args: SelectSubset<T, CompanySubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySubscriptions and returns the data updated in the database.
     * @param {CompanySubscriptionUpdateManyAndReturnArgs} args - Arguments to update many CompanySubscriptions.
     * @example
     * // Update many CompanySubscriptions
     * const companySubscription = await prisma.companySubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySubscriptions and only return the `id`
     * const companySubscriptionWithIdOnly = await prisma.companySubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanySubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanySubscription.
     * @param {CompanySubscriptionUpsertArgs} args - Arguments to update or create a CompanySubscription.
     * @example
     * // Update or create a CompanySubscription
     * const companySubscription = await prisma.companySubscription.upsert({
     *   create: {
     *     // ... data to create a CompanySubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySubscription we want to update
     *   }
     * })
     */
    upsert<T extends CompanySubscriptionUpsertArgs>(args: SelectSubset<T, CompanySubscriptionUpsertArgs<ExtArgs>>): Prisma__CompanySubscriptionClient<$Result.GetResult<Prisma.$CompanySubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanySubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionCountArgs} args - Arguments to filter CompanySubscriptions to count.
     * @example
     * // Count the number of CompanySubscriptions
     * const count = await prisma.companySubscription.count({
     *   where: {
     *     // ... the filter for the CompanySubscriptions we want to count
     *   }
     * })
    **/
    count<T extends CompanySubscriptionCountArgs>(
      args?: Subset<T, CompanySubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanySubscriptionAggregateArgs>(args: Subset<T, CompanySubscriptionAggregateArgs>): Prisma.PrismaPromise<GetCompanySubscriptionAggregateType<T>>

    /**
     * Group by CompanySubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySubscriptionGroupByArgs} args - Group by arguments.
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
      T extends CompanySubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: CompanySubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanySubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySubscription model
   */
  readonly fields: CompanySubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanySubscription model
   */
  interface CompanySubscriptionFieldRefs {
    readonly id: FieldRef<"CompanySubscription", 'Int'>
    readonly companyId: FieldRef<"CompanySubscription", 'Int'>
    readonly subscriptionType: FieldRef<"CompanySubscription", 'companySuscrptionType'>
    readonly startDate: FieldRef<"CompanySubscription", 'DateTime'>
    readonly endDate: FieldRef<"CompanySubscription", 'DateTime'>
    readonly active: FieldRef<"CompanySubscription", 'Boolean'>
    readonly createdAt: FieldRef<"CompanySubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanySubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanySubscription findUnique
   */
  export type CompanySubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which CompanySubscription to fetch.
     */
    where: CompanySubscriptionWhereUniqueInput
  }

  /**
   * CompanySubscription findUniqueOrThrow
   */
  export type CompanySubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which CompanySubscription to fetch.
     */
    where: CompanySubscriptionWhereUniqueInput
  }

  /**
   * CompanySubscription findFirst
   */
  export type CompanySubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which CompanySubscription to fetch.
     */
    where?: CompanySubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySubscriptions to fetch.
     */
    orderBy?: CompanySubscriptionOrderByWithRelationInput | CompanySubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySubscriptions.
     */
    cursor?: CompanySubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySubscriptions.
     */
    distinct?: CompanySubscriptionScalarFieldEnum | CompanySubscriptionScalarFieldEnum[]
  }

  /**
   * CompanySubscription findFirstOrThrow
   */
  export type CompanySubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which CompanySubscription to fetch.
     */
    where?: CompanySubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySubscriptions to fetch.
     */
    orderBy?: CompanySubscriptionOrderByWithRelationInput | CompanySubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySubscriptions.
     */
    cursor?: CompanySubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySubscriptions.
     */
    distinct?: CompanySubscriptionScalarFieldEnum | CompanySubscriptionScalarFieldEnum[]
  }

  /**
   * CompanySubscription findMany
   */
  export type CompanySubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which CompanySubscriptions to fetch.
     */
    where?: CompanySubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySubscriptions to fetch.
     */
    orderBy?: CompanySubscriptionOrderByWithRelationInput | CompanySubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySubscriptions.
     */
    cursor?: CompanySubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySubscriptions.
     */
    skip?: number
    distinct?: CompanySubscriptionScalarFieldEnum | CompanySubscriptionScalarFieldEnum[]
  }

  /**
   * CompanySubscription create
   */
  export type CompanySubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanySubscription.
     */
    data: XOR<CompanySubscriptionCreateInput, CompanySubscriptionUncheckedCreateInput>
  }

  /**
   * CompanySubscription createMany
   */
  export type CompanySubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySubscriptions.
     */
    data: CompanySubscriptionCreateManyInput | CompanySubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySubscription createManyAndReturn
   */
  export type CompanySubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySubscriptions.
     */
    data: CompanySubscriptionCreateManyInput | CompanySubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySubscription update
   */
  export type CompanySubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanySubscription.
     */
    data: XOR<CompanySubscriptionUpdateInput, CompanySubscriptionUncheckedUpdateInput>
    /**
     * Choose, which CompanySubscription to update.
     */
    where: CompanySubscriptionWhereUniqueInput
  }

  /**
   * CompanySubscription updateMany
   */
  export type CompanySubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySubscriptions.
     */
    data: XOR<CompanySubscriptionUpdateManyMutationInput, CompanySubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which CompanySubscriptions to update
     */
    where?: CompanySubscriptionWhereInput
    /**
     * Limit how many CompanySubscriptions to update.
     */
    limit?: number
  }

  /**
   * CompanySubscription updateManyAndReturn
   */
  export type CompanySubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update CompanySubscriptions.
     */
    data: XOR<CompanySubscriptionUpdateManyMutationInput, CompanySubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which CompanySubscriptions to update
     */
    where?: CompanySubscriptionWhereInput
    /**
     * Limit how many CompanySubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySubscription upsert
   */
  export type CompanySubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanySubscription to update in case it exists.
     */
    where: CompanySubscriptionWhereUniqueInput
    /**
     * In case the CompanySubscription found by the `where` argument doesn't exist, create a new CompanySubscription with this data.
     */
    create: XOR<CompanySubscriptionCreateInput, CompanySubscriptionUncheckedCreateInput>
    /**
     * In case the CompanySubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySubscriptionUpdateInput, CompanySubscriptionUncheckedUpdateInput>
  }

  /**
   * CompanySubscription delete
   */
  export type CompanySubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
    /**
     * Filter which CompanySubscription to delete.
     */
    where: CompanySubscriptionWhereUniqueInput
  }

  /**
   * CompanySubscription deleteMany
   */
  export type CompanySubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySubscriptions to delete
     */
    where?: CompanySubscriptionWhereInput
    /**
     * Limit how many CompanySubscriptions to delete.
     */
    limit?: number
  }

  /**
   * CompanySubscription without action
   */
  export type CompanySubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySubscription
     */
    select?: CompanySubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySubscription
     */
    omit?: CompanySubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySubscriptionInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    database: 'database',
    active: 'active',
    session: 'session',
    scannedQR: 'scannedQR',
    phoneWhatsapp: 'phoneWhatsapp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyLogScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    action: 'action',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CompanyLogScalarFieldEnum = (typeof CompanyLogScalarFieldEnum)[keyof typeof CompanyLogScalarFieldEnum]


  export const CompanyLegalInformationScalarFieldEnum: {
    id: 'id',
    ownerName: 'ownerName',
    ownerPhone: 'ownerPhone',
    ownerEmail: 'ownerEmail',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    address: 'address',
    rfc: 'rfc',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type CompanyLegalInformationScalarFieldEnum = (typeof CompanyLegalInformationScalarFieldEnum)[keyof typeof CompanyLegalInformationScalarFieldEnum]


  export const CompanySubscriptionScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    subscriptionType: 'subscriptionType',
    startDate: 'startDate',
    endDate: 'endDate',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanySubscriptionScalarFieldEnum = (typeof CompanySubscriptionScalarFieldEnum)[keyof typeof CompanySubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'companySuscrptionType'
   */
  export type EnumcompanySuscrptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'companySuscrptionType'>
    


  /**
   * Reference to a field of type 'companySuscrptionType[]'
   */
  export type ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'companySuscrptionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    database?: StringFilter<"Company"> | string
    active?: BoolFilter<"Company"> | boolean
    session?: BoolFilter<"Company"> | boolean
    scannedQR?: BoolFilter<"Company"> | boolean
    phoneWhatsapp?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    logs?: CompanyLogListRelationFilter
    subscriptions?: CompanySubscriptionListRelationFilter
    information?: CompanyLegalInformationListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    database?: SortOrder
    active?: SortOrder
    session?: SortOrder
    scannedQR?: SortOrder
    phoneWhatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: CompanyLogOrderByRelationAggregateInput
    subscriptions?: CompanySubscriptionOrderByRelationAggregateInput
    information?: CompanyLegalInformationOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    database?: StringFilter<"Company"> | string
    active?: BoolFilter<"Company"> | boolean
    session?: BoolFilter<"Company"> | boolean
    scannedQR?: BoolFilter<"Company"> | boolean
    phoneWhatsapp?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    logs?: CompanyLogListRelationFilter
    subscriptions?: CompanySubscriptionListRelationFilter
    information?: CompanyLegalInformationListRelationFilter
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    database?: SortOrder
    active?: SortOrder
    session?: SortOrder
    scannedQR?: SortOrder
    phoneWhatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    database?: StringWithAggregatesFilter<"Company"> | string
    active?: BoolWithAggregatesFilter<"Company"> | boolean
    session?: BoolWithAggregatesFilter<"Company"> | boolean
    scannedQR?: BoolWithAggregatesFilter<"Company"> | boolean
    phoneWhatsapp?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type CompanyLogWhereInput = {
    AND?: CompanyLogWhereInput | CompanyLogWhereInput[]
    OR?: CompanyLogWhereInput[]
    NOT?: CompanyLogWhereInput | CompanyLogWhereInput[]
    id?: IntFilter<"CompanyLog"> | number
    companyId?: IntFilter<"CompanyLog"> | number
    action?: StringFilter<"CompanyLog"> | string
    description?: StringFilter<"CompanyLog"> | string
    createdAt?: DateTimeFilter<"CompanyLog"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyLogOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyLogWhereInput | CompanyLogWhereInput[]
    OR?: CompanyLogWhereInput[]
    NOT?: CompanyLogWhereInput | CompanyLogWhereInput[]
    companyId?: IntFilter<"CompanyLog"> | number
    action?: StringFilter<"CompanyLog"> | string
    description?: StringFilter<"CompanyLog"> | string
    createdAt?: DateTimeFilter<"CompanyLog"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyLogOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: CompanyLogCountOrderByAggregateInput
    _avg?: CompanyLogAvgOrderByAggregateInput
    _max?: CompanyLogMaxOrderByAggregateInput
    _min?: CompanyLogMinOrderByAggregateInput
    _sum?: CompanyLogSumOrderByAggregateInput
  }

  export type CompanyLogScalarWhereWithAggregatesInput = {
    AND?: CompanyLogScalarWhereWithAggregatesInput | CompanyLogScalarWhereWithAggregatesInput[]
    OR?: CompanyLogScalarWhereWithAggregatesInput[]
    NOT?: CompanyLogScalarWhereWithAggregatesInput | CompanyLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyLog"> | number
    companyId?: IntWithAggregatesFilter<"CompanyLog"> | number
    action?: StringWithAggregatesFilter<"CompanyLog"> | string
    description?: StringWithAggregatesFilter<"CompanyLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompanyLog"> | Date | string
  }

  export type CompanyLegalInformationWhereInput = {
    AND?: CompanyLegalInformationWhereInput | CompanyLegalInformationWhereInput[]
    OR?: CompanyLegalInformationWhereInput[]
    NOT?: CompanyLegalInformationWhereInput | CompanyLegalInformationWhereInput[]
    id?: IntFilter<"CompanyLegalInformation"> | number
    ownerName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    address?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    rfc?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    active?: BoolFilter<"CompanyLegalInformation"> | boolean
    createdAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    companyId?: IntFilter<"CompanyLegalInformation"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyLegalInformationOrderByWithRelationInput = {
    id?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrderInput | SortOrder
    ownerEmail?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rfc?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyLegalInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyLegalInformationWhereInput | CompanyLegalInformationWhereInput[]
    OR?: CompanyLegalInformationWhereInput[]
    NOT?: CompanyLegalInformationWhereInput | CompanyLegalInformationWhereInput[]
    ownerName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    address?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    rfc?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    active?: BoolFilter<"CompanyLegalInformation"> | boolean
    createdAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    companyId?: IntFilter<"CompanyLegalInformation"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyLegalInformationOrderByWithAggregationInput = {
    id?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrderInput | SortOrder
    ownerEmail?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rfc?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: CompanyLegalInformationCountOrderByAggregateInput
    _avg?: CompanyLegalInformationAvgOrderByAggregateInput
    _max?: CompanyLegalInformationMaxOrderByAggregateInput
    _min?: CompanyLegalInformationMinOrderByAggregateInput
    _sum?: CompanyLegalInformationSumOrderByAggregateInput
  }

  export type CompanyLegalInformationScalarWhereWithAggregatesInput = {
    AND?: CompanyLegalInformationScalarWhereWithAggregatesInput | CompanyLegalInformationScalarWhereWithAggregatesInput[]
    OR?: CompanyLegalInformationScalarWhereWithAggregatesInput[]
    NOT?: CompanyLegalInformationScalarWhereWithAggregatesInput | CompanyLegalInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyLegalInformation"> | number
    ownerName?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    ownerPhone?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    ownerEmail?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    address?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    rfc?: StringNullableWithAggregatesFilter<"CompanyLegalInformation"> | string | null
    active?: BoolWithAggregatesFilter<"CompanyLegalInformation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompanyLegalInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyLegalInformation"> | Date | string
    companyId?: IntWithAggregatesFilter<"CompanyLegalInformation"> | number
  }

  export type CompanySubscriptionWhereInput = {
    AND?: CompanySubscriptionWhereInput | CompanySubscriptionWhereInput[]
    OR?: CompanySubscriptionWhereInput[]
    NOT?: CompanySubscriptionWhereInput | CompanySubscriptionWhereInput[]
    id?: IntFilter<"CompanySubscription"> | number
    companyId?: IntFilter<"CompanySubscription"> | number
    subscriptionType?: EnumcompanySuscrptionTypeFilter<"CompanySubscription"> | $Enums.companySuscrptionType
    startDate?: DateTimeFilter<"CompanySubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"CompanySubscription"> | Date | string | null
    active?: BoolFilter<"CompanySubscription"> | boolean
    createdAt?: DateTimeFilter<"CompanySubscription"> | Date | string
    updatedAt?: DateTimeFilter<"CompanySubscription"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanySubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    subscriptionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanySubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanySubscriptionWhereInput | CompanySubscriptionWhereInput[]
    OR?: CompanySubscriptionWhereInput[]
    NOT?: CompanySubscriptionWhereInput | CompanySubscriptionWhereInput[]
    companyId?: IntFilter<"CompanySubscription"> | number
    subscriptionType?: EnumcompanySuscrptionTypeFilter<"CompanySubscription"> | $Enums.companySuscrptionType
    startDate?: DateTimeFilter<"CompanySubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"CompanySubscription"> | Date | string | null
    active?: BoolFilter<"CompanySubscription"> | boolean
    createdAt?: DateTimeFilter<"CompanySubscription"> | Date | string
    updatedAt?: DateTimeFilter<"CompanySubscription"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanySubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    subscriptionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanySubscriptionCountOrderByAggregateInput
    _avg?: CompanySubscriptionAvgOrderByAggregateInput
    _max?: CompanySubscriptionMaxOrderByAggregateInput
    _min?: CompanySubscriptionMinOrderByAggregateInput
    _sum?: CompanySubscriptionSumOrderByAggregateInput
  }

  export type CompanySubscriptionScalarWhereWithAggregatesInput = {
    AND?: CompanySubscriptionScalarWhereWithAggregatesInput | CompanySubscriptionScalarWhereWithAggregatesInput[]
    OR?: CompanySubscriptionScalarWhereWithAggregatesInput[]
    NOT?: CompanySubscriptionScalarWhereWithAggregatesInput | CompanySubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanySubscription"> | number
    companyId?: IntWithAggregatesFilter<"CompanySubscription"> | number
    subscriptionType?: EnumcompanySuscrptionTypeWithAggregatesFilter<"CompanySubscription"> | $Enums.companySuscrptionType
    startDate?: DateTimeWithAggregatesFilter<"CompanySubscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"CompanySubscription"> | Date | string | null
    active?: BoolWithAggregatesFilter<"CompanySubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompanySubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanySubscription"> | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogCreateNestedManyWithoutCompanyInput
    subscriptions?: CompanySubscriptionCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: CompanySubscriptionUncheckedCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUpdateManyWithoutCompanyNestedInput
    subscriptions?: CompanySubscriptionUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: CompanySubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLogCreateInput = {
    action: string
    description: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutLogsInput
  }

  export type CompanyLogUncheckedCreateInput = {
    id?: number
    companyId: number
    action: string
    description: string
    createdAt?: Date | string
  }

  export type CompanyLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutLogsNestedInput
  }

  export type CompanyLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLogCreateManyInput = {
    id?: number
    companyId: number
    action: string
    description: string
    createdAt?: Date | string
  }

  export type CompanyLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLegalInformationCreateInput = {
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutInformationInput
  }

  export type CompanyLegalInformationUncheckedCreateInput = {
    id?: number
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: number
  }

  export type CompanyLegalInformationUpdateInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInformationNestedInput
  }

  export type CompanyLegalInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyLegalInformationCreateManyInput = {
    id?: number
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: number
  }

  export type CompanyLegalInformationUpdateManyMutationInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLegalInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySubscriptionCreateInput = {
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSubscriptionsInput
  }

  export type CompanySubscriptionUncheckedCreateInput = {
    id?: number
    companyId: number
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySubscriptionUpdateInput = {
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type CompanySubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySubscriptionCreateManyInput = {
    id?: number
    companyId: number
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySubscriptionUpdateManyMutationInput = {
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyLogListRelationFilter = {
    every?: CompanyLogWhereInput
    some?: CompanyLogWhereInput
    none?: CompanyLogWhereInput
  }

  export type CompanySubscriptionListRelationFilter = {
    every?: CompanySubscriptionWhereInput
    some?: CompanySubscriptionWhereInput
    none?: CompanySubscriptionWhereInput
  }

  export type CompanyLegalInformationListRelationFilter = {
    every?: CompanyLegalInformationWhereInput
    some?: CompanyLegalInformationWhereInput
    none?: CompanyLegalInformationWhereInput
  }

  export type CompanyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanySubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyLegalInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    database?: SortOrder
    active?: SortOrder
    session?: SortOrder
    scannedQR?: SortOrder
    phoneWhatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    database?: SortOrder
    active?: SortOrder
    session?: SortOrder
    scannedQR?: SortOrder
    phoneWhatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    database?: SortOrder
    active?: SortOrder
    session?: SortOrder
    scannedQR?: SortOrder
    phoneWhatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyLogCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyLogAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyLogMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyLogSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyLegalInformationCountOrderByAggregateInput = {
    id?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    rfc?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyLegalInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyLegalInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    rfc?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyLegalInformationMinOrderByAggregateInput = {
    id?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    rfc?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyLegalInformationSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumcompanySuscrptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.companySuscrptionType | EnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel> | $Enums.companySuscrptionType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanySubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    subscriptionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanySubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    subscriptionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    subscriptionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EnumcompanySuscrptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.companySuscrptionType | EnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcompanySuscrptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.companySuscrptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel>
    _max?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompanyLogCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput> | CompanyLogCreateWithoutCompanyInput[] | CompanyLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLogCreateOrConnectWithoutCompanyInput | CompanyLogCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyLogCreateManyCompanyInputEnvelope
    connect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
  }

  export type CompanySubscriptionCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput> | CompanySubscriptionCreateWithoutCompanyInput[] | CompanySubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySubscriptionCreateOrConnectWithoutCompanyInput | CompanySubscriptionCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanySubscriptionCreateManyCompanyInputEnvelope
    connect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
  }

  export type CompanyLegalInformationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput> | CompanyLegalInformationCreateWithoutCompanyInput[] | CompanyLegalInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLegalInformationCreateOrConnectWithoutCompanyInput | CompanyLegalInformationCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyLegalInformationCreateManyCompanyInputEnvelope
    connect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
  }

  export type CompanyLogUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput> | CompanyLogCreateWithoutCompanyInput[] | CompanyLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLogCreateOrConnectWithoutCompanyInput | CompanyLogCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyLogCreateManyCompanyInputEnvelope
    connect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
  }

  export type CompanySubscriptionUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput> | CompanySubscriptionCreateWithoutCompanyInput[] | CompanySubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySubscriptionCreateOrConnectWithoutCompanyInput | CompanySubscriptionCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanySubscriptionCreateManyCompanyInputEnvelope
    connect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
  }

  export type CompanyLegalInformationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput> | CompanyLegalInformationCreateWithoutCompanyInput[] | CompanyLegalInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLegalInformationCreateOrConnectWithoutCompanyInput | CompanyLegalInformationCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyLegalInformationCreateManyCompanyInputEnvelope
    connect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyLogUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput> | CompanyLogCreateWithoutCompanyInput[] | CompanyLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLogCreateOrConnectWithoutCompanyInput | CompanyLogCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyLogUpsertWithWhereUniqueWithoutCompanyInput | CompanyLogUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyLogCreateManyCompanyInputEnvelope
    set?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    disconnect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    delete?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    connect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    update?: CompanyLogUpdateWithWhereUniqueWithoutCompanyInput | CompanyLogUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyLogUpdateManyWithWhereWithoutCompanyInput | CompanyLogUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyLogScalarWhereInput | CompanyLogScalarWhereInput[]
  }

  export type CompanySubscriptionUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput> | CompanySubscriptionCreateWithoutCompanyInput[] | CompanySubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySubscriptionCreateOrConnectWithoutCompanyInput | CompanySubscriptionCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanySubscriptionUpsertWithWhereUniqueWithoutCompanyInput | CompanySubscriptionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanySubscriptionCreateManyCompanyInputEnvelope
    set?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    disconnect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    delete?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    connect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    update?: CompanySubscriptionUpdateWithWhereUniqueWithoutCompanyInput | CompanySubscriptionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanySubscriptionUpdateManyWithWhereWithoutCompanyInput | CompanySubscriptionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanySubscriptionScalarWhereInput | CompanySubscriptionScalarWhereInput[]
  }

  export type CompanyLegalInformationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput> | CompanyLegalInformationCreateWithoutCompanyInput[] | CompanyLegalInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLegalInformationCreateOrConnectWithoutCompanyInput | CompanyLegalInformationCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyLegalInformationUpsertWithWhereUniqueWithoutCompanyInput | CompanyLegalInformationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyLegalInformationCreateManyCompanyInputEnvelope
    set?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    disconnect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    delete?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    connect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    update?: CompanyLegalInformationUpdateWithWhereUniqueWithoutCompanyInput | CompanyLegalInformationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyLegalInformationUpdateManyWithWhereWithoutCompanyInput | CompanyLegalInformationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyLegalInformationScalarWhereInput | CompanyLegalInformationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyLogUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput> | CompanyLogCreateWithoutCompanyInput[] | CompanyLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLogCreateOrConnectWithoutCompanyInput | CompanyLogCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyLogUpsertWithWhereUniqueWithoutCompanyInput | CompanyLogUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyLogCreateManyCompanyInputEnvelope
    set?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    disconnect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    delete?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    connect?: CompanyLogWhereUniqueInput | CompanyLogWhereUniqueInput[]
    update?: CompanyLogUpdateWithWhereUniqueWithoutCompanyInput | CompanyLogUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyLogUpdateManyWithWhereWithoutCompanyInput | CompanyLogUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyLogScalarWhereInput | CompanyLogScalarWhereInput[]
  }

  export type CompanySubscriptionUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput> | CompanySubscriptionCreateWithoutCompanyInput[] | CompanySubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanySubscriptionCreateOrConnectWithoutCompanyInput | CompanySubscriptionCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanySubscriptionUpsertWithWhereUniqueWithoutCompanyInput | CompanySubscriptionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanySubscriptionCreateManyCompanyInputEnvelope
    set?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    disconnect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    delete?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    connect?: CompanySubscriptionWhereUniqueInput | CompanySubscriptionWhereUniqueInput[]
    update?: CompanySubscriptionUpdateWithWhereUniqueWithoutCompanyInput | CompanySubscriptionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanySubscriptionUpdateManyWithWhereWithoutCompanyInput | CompanySubscriptionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanySubscriptionScalarWhereInput | CompanySubscriptionScalarWhereInput[]
  }

  export type CompanyLegalInformationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput> | CompanyLegalInformationCreateWithoutCompanyInput[] | CompanyLegalInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyLegalInformationCreateOrConnectWithoutCompanyInput | CompanyLegalInformationCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyLegalInformationUpsertWithWhereUniqueWithoutCompanyInput | CompanyLegalInformationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyLegalInformationCreateManyCompanyInputEnvelope
    set?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    disconnect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    delete?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    connect?: CompanyLegalInformationWhereUniqueInput | CompanyLegalInformationWhereUniqueInput[]
    update?: CompanyLegalInformationUpdateWithWhereUniqueWithoutCompanyInput | CompanyLegalInformationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyLegalInformationUpdateManyWithWhereWithoutCompanyInput | CompanyLegalInformationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyLegalInformationScalarWhereInput | CompanyLegalInformationScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutLogsInput = {
    create?: XOR<CompanyCreateWithoutLogsInput, CompanyUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLogsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<CompanyCreateWithoutLogsInput, CompanyUncheckedCreateWithoutLogsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLogsInput
    upsert?: CompanyUpsertWithoutLogsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutLogsInput, CompanyUpdateWithoutLogsInput>, CompanyUncheckedUpdateWithoutLogsInput>
  }

  export type CompanyCreateNestedOneWithoutInformationInput = {
    create?: XOR<CompanyCreateWithoutInformationInput, CompanyUncheckedCreateWithoutInformationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInformationInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompanyUpdateOneRequiredWithoutInformationNestedInput = {
    create?: XOR<CompanyCreateWithoutInformationInput, CompanyUncheckedCreateWithoutInformationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInformationInput
    upsert?: CompanyUpsertWithoutInformationInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutInformationInput, CompanyUpdateWithoutInformationInput>, CompanyUncheckedUpdateWithoutInformationInput>
  }

  export type CompanyCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionsInput, CompanyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumcompanySuscrptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.companySuscrptionType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionsInput, CompanyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionsInput
    upsert?: CompanyUpsertWithoutSubscriptionsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSubscriptionsInput, CompanyUpdateWithoutSubscriptionsInput>, CompanyUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumcompanySuscrptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.companySuscrptionType | EnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel> | $Enums.companySuscrptionType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumcompanySuscrptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.companySuscrptionType | EnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.companySuscrptionType[] | ListEnumcompanySuscrptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcompanySuscrptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.companySuscrptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel>
    _max?: NestedEnumcompanySuscrptionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompanyLogCreateWithoutCompanyInput = {
    action: string
    description: string
    createdAt?: Date | string
  }

  export type CompanyLogUncheckedCreateWithoutCompanyInput = {
    id?: number
    action: string
    description: string
    createdAt?: Date | string
  }

  export type CompanyLogCreateOrConnectWithoutCompanyInput = {
    where: CompanyLogWhereUniqueInput
    create: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyLogCreateManyCompanyInputEnvelope = {
    data: CompanyLogCreateManyCompanyInput | CompanyLogCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanySubscriptionCreateWithoutCompanyInput = {
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySubscriptionUncheckedCreateWithoutCompanyInput = {
    id?: number
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySubscriptionCreateOrConnectWithoutCompanyInput = {
    where: CompanySubscriptionWhereUniqueInput
    create: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput>
  }

  export type CompanySubscriptionCreateManyCompanyInputEnvelope = {
    data: CompanySubscriptionCreateManyCompanyInput | CompanySubscriptionCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyLegalInformationCreateWithoutCompanyInput = {
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyLegalInformationUncheckedCreateWithoutCompanyInput = {
    id?: number
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyLegalInformationCreateOrConnectWithoutCompanyInput = {
    where: CompanyLegalInformationWhereUniqueInput
    create: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyLegalInformationCreateManyCompanyInputEnvelope = {
    data: CompanyLegalInformationCreateManyCompanyInput | CompanyLegalInformationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyLogUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyLogWhereUniqueInput
    update: XOR<CompanyLogUpdateWithoutCompanyInput, CompanyLogUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyLogCreateWithoutCompanyInput, CompanyLogUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyLogUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyLogWhereUniqueInput
    data: XOR<CompanyLogUpdateWithoutCompanyInput, CompanyLogUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyLogUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyLogScalarWhereInput
    data: XOR<CompanyLogUpdateManyMutationInput, CompanyLogUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyLogScalarWhereInput = {
    AND?: CompanyLogScalarWhereInput | CompanyLogScalarWhereInput[]
    OR?: CompanyLogScalarWhereInput[]
    NOT?: CompanyLogScalarWhereInput | CompanyLogScalarWhereInput[]
    id?: IntFilter<"CompanyLog"> | number
    companyId?: IntFilter<"CompanyLog"> | number
    action?: StringFilter<"CompanyLog"> | string
    description?: StringFilter<"CompanyLog"> | string
    createdAt?: DateTimeFilter<"CompanyLog"> | Date | string
  }

  export type CompanySubscriptionUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanySubscriptionWhereUniqueInput
    update: XOR<CompanySubscriptionUpdateWithoutCompanyInput, CompanySubscriptionUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanySubscriptionCreateWithoutCompanyInput, CompanySubscriptionUncheckedCreateWithoutCompanyInput>
  }

  export type CompanySubscriptionUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanySubscriptionWhereUniqueInput
    data: XOR<CompanySubscriptionUpdateWithoutCompanyInput, CompanySubscriptionUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanySubscriptionUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanySubscriptionScalarWhereInput
    data: XOR<CompanySubscriptionUpdateManyMutationInput, CompanySubscriptionUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanySubscriptionScalarWhereInput = {
    AND?: CompanySubscriptionScalarWhereInput | CompanySubscriptionScalarWhereInput[]
    OR?: CompanySubscriptionScalarWhereInput[]
    NOT?: CompanySubscriptionScalarWhereInput | CompanySubscriptionScalarWhereInput[]
    id?: IntFilter<"CompanySubscription"> | number
    companyId?: IntFilter<"CompanySubscription"> | number
    subscriptionType?: EnumcompanySuscrptionTypeFilter<"CompanySubscription"> | $Enums.companySuscrptionType
    startDate?: DateTimeFilter<"CompanySubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"CompanySubscription"> | Date | string | null
    active?: BoolFilter<"CompanySubscription"> | boolean
    createdAt?: DateTimeFilter<"CompanySubscription"> | Date | string
    updatedAt?: DateTimeFilter<"CompanySubscription"> | Date | string
  }

  export type CompanyLegalInformationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyLegalInformationWhereUniqueInput
    update: XOR<CompanyLegalInformationUpdateWithoutCompanyInput, CompanyLegalInformationUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyLegalInformationCreateWithoutCompanyInput, CompanyLegalInformationUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyLegalInformationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyLegalInformationWhereUniqueInput
    data: XOR<CompanyLegalInformationUpdateWithoutCompanyInput, CompanyLegalInformationUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyLegalInformationUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyLegalInformationScalarWhereInput
    data: XOR<CompanyLegalInformationUpdateManyMutationInput, CompanyLegalInformationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyLegalInformationScalarWhereInput = {
    AND?: CompanyLegalInformationScalarWhereInput | CompanyLegalInformationScalarWhereInput[]
    OR?: CompanyLegalInformationScalarWhereInput[]
    NOT?: CompanyLegalInformationScalarWhereInput | CompanyLegalInformationScalarWhereInput[]
    id?: IntFilter<"CompanyLegalInformation"> | number
    ownerName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    ownerEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactName?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactPhone?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    contactEmail?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    address?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    rfc?: StringNullableFilter<"CompanyLegalInformation"> | string | null
    active?: BoolFilter<"CompanyLegalInformation"> | boolean
    createdAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyLegalInformation"> | Date | string
    companyId?: IntFilter<"CompanyLegalInformation"> | number
  }

  export type CompanyCreateWithoutLogsInput = {
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: CompanySubscriptionCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: CompanySubscriptionUncheckedCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutLogsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutLogsInput, CompanyUncheckedCreateWithoutLogsInput>
  }

  export type CompanyUpsertWithoutLogsInput = {
    update: XOR<CompanyUpdateWithoutLogsInput, CompanyUncheckedUpdateWithoutLogsInput>
    create: XOR<CompanyCreateWithoutLogsInput, CompanyUncheckedCreateWithoutLogsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutLogsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutLogsInput, CompanyUncheckedUpdateWithoutLogsInput>
  }

  export type CompanyUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: CompanySubscriptionUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: CompanySubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutInformationInput = {
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogCreateNestedManyWithoutCompanyInput
    subscriptions?: CompanySubscriptionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutInformationInput = {
    id?: number
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: CompanySubscriptionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutInformationInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutInformationInput, CompanyUncheckedCreateWithoutInformationInput>
  }

  export type CompanyUpsertWithoutInformationInput = {
    update: XOR<CompanyUpdateWithoutInformationInput, CompanyUncheckedUpdateWithoutInformationInput>
    create: XOR<CompanyCreateWithoutInformationInput, CompanyUncheckedCreateWithoutInformationInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutInformationInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutInformationInput, CompanyUncheckedUpdateWithoutInformationInput>
  }

  export type CompanyUpdateWithoutInformationInput = {
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUpdateManyWithoutCompanyNestedInput
    subscriptions?: CompanySubscriptionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: CompanySubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutSubscriptionsInput = {
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    name: string
    database: string
    active?: boolean
    session?: boolean
    scannedQR?: boolean
    phoneWhatsapp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: CompanyLogUncheckedCreateNestedManyWithoutCompanyInput
    information?: CompanyLegalInformationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSubscriptionsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSubscriptionsInput, CompanyUncheckedCreateWithoutSubscriptionsInput>
  }

  export type CompanyUpsertWithoutSubscriptionsInput = {
    update: XOR<CompanyUpdateWithoutSubscriptionsInput, CompanyUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CompanyCreateWithoutSubscriptionsInput, CompanyUncheckedCreateWithoutSubscriptionsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSubscriptionsInput, CompanyUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CompanyUpdateWithoutSubscriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    database?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    session?: BoolFieldUpdateOperationsInput | boolean
    scannedQR?: BoolFieldUpdateOperationsInput | boolean
    phoneWhatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: CompanyLogUncheckedUpdateManyWithoutCompanyNestedInput
    information?: CompanyLegalInformationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyLogCreateManyCompanyInput = {
    id?: number
    action: string
    description: string
    createdAt?: Date | string
  }

  export type CompanySubscriptionCreateManyCompanyInput = {
    id?: number
    subscriptionType: $Enums.companySuscrptionType
    startDate?: Date | string
    endDate?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyLegalInformationCreateManyCompanyInput = {
    id?: number
    ownerName?: string | null
    ownerPhone?: string | null
    ownerEmail?: string | null
    contactName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    rfc?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyLogUpdateWithoutCompanyInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLogUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLogUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySubscriptionUpdateWithoutCompanyInput = {
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySubscriptionUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySubscriptionUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionType?: EnumcompanySuscrptionTypeFieldUpdateOperationsInput | $Enums.companySuscrptionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLegalInformationUpdateWithoutCompanyInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLegalInformationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyLegalInformationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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