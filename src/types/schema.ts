// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Balancer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Balancer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Balancer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Balancer", id.toString(), this);
  }

  static load(id: string): Balancer | null {
    return store.get("Balancer", id) as Balancer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolCount(): i32 {
    let value = this.get("poolCount");
    return value.toI32();
  }

  set poolCount(value: i32) {
    this.set("poolCount", Value.fromI32(value));
  }

  get pools(): Array<string> | null {
    let value = this.get("pools");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set pools(value: Array<string> | null) {
    if (value === null) {
      this.unset("pools");
    } else {
      this.set("pools", Value.fromStringArray(value as Array<string>));
    }
  }

  get totalLiquidity(): BigDecimal {
    let value = this.get("totalLiquidity");
    return value.toBigDecimal();
  }

  set totalLiquidity(value: BigDecimal) {
    this.set("totalLiquidity", Value.fromBigDecimal(value));
  }

  get totalSwapVolume(): BigDecimal {
    let value = this.get("totalSwapVolume");
    return value.toBigDecimal();
  }

  set totalSwapVolume(value: BigDecimal) {
    this.set("totalSwapVolume", Value.fromBigDecimal(value));
  }

  get totalSwapFee(): BigDecimal {
    let value = this.get("totalSwapFee");
    return value.toBigDecimal();
  }

  set totalSwapFee(value: BigDecimal) {
    this.set("totalSwapFee", Value.fromBigDecimal(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pool", id.toString(), this);
  }

  static load(id: string): Pool | null {
    return store.get("Pool", id) as Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get poolType(): string | null {
    let value = this.get("poolType");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set poolType(value: string | null) {
    if (value === null) {
      this.unset("poolType");
    } else {
      this.set("poolType", Value.fromString(value as string));
    }
  }

  get factory(): Bytes | null {
    let value = this.get("factory");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set factory(value: Bytes | null) {
    if (value === null) {
      this.unset("factory");
    } else {
      this.set("factory", Value.fromBytes(value as Bytes));
    }
  }

  get strategyType(): i32 {
    let value = this.get("strategyType");
    return value.toI32();
  }

  set strategyType(value: i32) {
    this.set("strategyType", Value.fromI32(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get swapEnabled(): boolean {
    let value = this.get("swapEnabled");
    return value.toBoolean();
  }

  set swapEnabled(value: boolean) {
    this.set("swapEnabled", Value.fromBoolean(value));
  }

  get swapFee(): BigDecimal {
    let value = this.get("swapFee");
    return value.toBigDecimal();
  }

  set swapFee(value: BigDecimal) {
    this.set("swapFee", Value.fromBigDecimal(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get totalWeight(): BigDecimal | null {
    let value = this.get("totalWeight");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set totalWeight(value: BigDecimal | null) {
    if (value === null) {
      this.unset("totalWeight");
    } else {
      this.set("totalWeight", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get totalSwapVolume(): BigDecimal {
    let value = this.get("totalSwapVolume");
    return value.toBigDecimal();
  }

  set totalSwapVolume(value: BigDecimal) {
    this.set("totalSwapVolume", Value.fromBigDecimal(value));
  }

  get totalSwapFee(): BigDecimal {
    let value = this.get("totalSwapFee");
    return value.toBigDecimal();
  }

  set totalSwapFee(value: BigDecimal) {
    this.set("totalSwapFee", Value.fromBigDecimal(value));
  }

  get totalLiquidity(): BigDecimal {
    let value = this.get("totalLiquidity");
    return value.toBigDecimal();
  }

  set totalLiquidity(value: BigDecimal) {
    this.set("totalLiquidity", Value.fromBigDecimal(value));
  }

  get totalShares(): BigDecimal {
    let value = this.get("totalShares");
    return value.toBigDecimal();
  }

  set totalShares(value: BigDecimal) {
    this.set("totalShares", Value.fromBigDecimal(value));
  }

  get createTime(): i32 {
    let value = this.get("createTime");
    return value.toI32();
  }

  set createTime(value: i32) {
    this.set("createTime", Value.fromI32(value));
  }

  get swapsCount(): BigInt {
    let value = this.get("swapsCount");
    return value.toBigInt();
  }

  set swapsCount(value: BigInt) {
    this.set("swapsCount", Value.fromBigInt(value));
  }

  get holdersCount(): BigInt {
    let value = this.get("holdersCount");
    return value.toBigInt();
  }

  set holdersCount(value: BigInt) {
    this.set("holdersCount", Value.fromBigInt(value));
  }

  get vaultID(): string {
    let value = this.get("vaultID");
    return value.toString();
  }

  set vaultID(value: string) {
    this.set("vaultID", Value.fromString(value));
  }

  get tx(): Bytes | null {
    let value = this.get("tx");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tx(value: Bytes | null) {
    if (value === null) {
      this.unset("tx");
    } else {
      this.set("tx", Value.fromBytes(value as Bytes));
    }
  }

  get tokensList(): Array<Bytes> {
    let value = this.get("tokensList");
    return value.toBytesArray();
  }

  set tokensList(value: Array<Bytes>) {
    this.set("tokensList", Value.fromBytesArray(value));
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get swaps(): Array<string> | null {
    let value = this.get("swaps");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set swaps(value: Array<string> | null) {
    if (value === null) {
      this.unset("swaps");
    } else {
      this.set("swaps", Value.fromStringArray(value as Array<string>));
    }
  }

  get shares(): Array<string> | null {
    let value = this.get("shares");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set shares(value: Array<string> | null) {
    if (value === null) {
      this.unset("shares");
    } else {
      this.set("shares", Value.fromStringArray(value as Array<string>));
    }
  }

  get historicalValues(): Array<string> | null {
    let value = this.get("historicalValues");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set historicalValues(value: Array<string> | null) {
    if (value === null) {
      this.unset("historicalValues");
    } else {
      this.set(
        "historicalValues",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get weightUpdates(): Array<string> | null {
    let value = this.get("weightUpdates");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set weightUpdates(value: Array<string> | null) {
    if (value === null) {
      this.unset("weightUpdates");
    } else {
      this.set("weightUpdates", Value.fromStringArray(value as Array<string>));
    }
  }

  get amp(): BigInt | null {
    let value = this.get("amp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amp(value: BigInt | null) {
    if (value === null) {
      this.unset("amp");
    } else {
      this.set("amp", Value.fromBigInt(value as BigInt));
    }
  }

  get principalToken(): Bytes | null {
    let value = this.get("principalToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set principalToken(value: Bytes | null) {
    if (value === null) {
      this.unset("principalToken");
    } else {
      this.set("principalToken", Value.fromBytes(value as Bytes));
    }
  }

  get baseToken(): Bytes | null {
    let value = this.get("baseToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set baseToken(value: Bytes | null) {
    if (value === null) {
      this.unset("baseToken");
    } else {
      this.set("baseToken", Value.fromBytes(value as Bytes));
    }
  }

  get expiryTime(): BigInt | null {
    let value = this.get("expiryTime");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expiryTime(value: BigInt | null) {
    if (value === null) {
      this.unset("expiryTime");
    } else {
      this.set("expiryTime", Value.fromBigInt(value as BigInt));
    }
  }

  get unitSeconds(): BigInt | null {
    let value = this.get("unitSeconds");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set unitSeconds(value: BigInt | null) {
    if (value === null) {
      this.unset("unitSeconds");
    } else {
      this.set("unitSeconds", Value.fromBigInt(value as BigInt));
    }
  }
}

export class PoolToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolToken", id.toString(), this);
  }

  static load(id: string): PoolToken | null {
    return store.get("PoolToken", id) as PoolToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get invested(): BigDecimal {
    let value = this.get("invested");
    return value.toBigDecimal();
  }

  set invested(value: BigDecimal) {
    this.set("invested", Value.fromBigDecimal(value));
  }

  get investments(): Array<string> | null {
    let value = this.get("investments");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set investments(value: Array<string> | null) {
    if (value === null) {
      this.unset("investments");
    } else {
      this.set("investments", Value.fromStringArray(value as Array<string>));
    }
  }

  get weight(): BigDecimal | null {
    let value = this.get("weight");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set weight(value: BigDecimal | null) {
    if (value === null) {
      this.unset("weight");
    } else {
      this.set("weight", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class PoolShare extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolShare entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolShare entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolShare", id.toString(), this);
  }

  static load(id: string): PoolShare | null {
    return store.get("PoolShare", id) as PoolShare | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userAddress(): string {
    let value = this.get("userAddress");
    return value.toString();
  }

  set userAddress(value: string) {
    this.set("userAddress", Value.fromString(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sharesOwned(): Array<string> | null {
    let value = this.get("sharesOwned");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sharesOwned(value: Array<string> | null) {
    if (value === null) {
      this.unset("sharesOwned");
    } else {
      this.set("sharesOwned", Value.fromStringArray(value as Array<string>));
    }
  }

  get swaps(): Array<string> | null {
    let value = this.get("swaps");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set swaps(value: Array<string> | null) {
    if (value === null) {
      this.unset("swaps");
    } else {
      this.set("swaps", Value.fromStringArray(value as Array<string>));
    }
  }

  get userInternalBalances(): Array<string> | null {
    let value = this.get("userInternalBalances");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set userInternalBalances(value: Array<string> | null) {
    if (value === null) {
      this.unset("userInternalBalances");
    } else {
      this.set(
        "userInternalBalances",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }
}

export class UserInternalBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserInternalBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserInternalBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserInternalBalance", id.toString(), this);
  }

  static load(id: string): UserInternalBalance | null {
    return store.get("UserInternalBalance", id) as UserInternalBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userAddress(): string | null {
    let value = this.get("userAddress");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set userAddress(value: string | null) {
    if (value === null) {
      this.unset("userAddress");
    } else {
      this.set("userAddress", Value.fromString(value as string));
    }
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }
}

export class GradualWeightUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GradualWeightUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GradualWeightUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GradualWeightUpdate", id.toString(), this);
  }

  static load(id: string): GradualWeightUpdate | null {
    return store.get("GradualWeightUpdate", id) as GradualWeightUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get scheduledTimestamp(): i32 {
    let value = this.get("scheduledTimestamp");
    return value.toI32();
  }

  set scheduledTimestamp(value: i32) {
    this.set("scheduledTimestamp", Value.fromI32(value));
  }

  get startTimestamp(): i32 {
    let value = this.get("startTimestamp");
    return value.toI32();
  }

  set startTimestamp(value: i32) {
    this.set("startTimestamp", Value.fromI32(value));
  }

  get endTimestamp(): i32 {
    let value = this.get("endTimestamp");
    return value.toI32();
  }

  set endTimestamp(value: i32) {
    this.set("endTimestamp", Value.fromI32(value));
  }

  get startWeights(): Array<BigInt> {
    let value = this.get("startWeights");
    return value.toBigIntArray();
  }

  set startWeights(value: Array<BigInt>) {
    this.set("startWeights", Value.fromBigIntArray(value));
  }

  get endWeights(): Array<BigInt> {
    let value = this.get("endWeights");
    return value.toBigIntArray();
  }

  set endWeights(value: Array<BigInt>) {
    this.set("endWeights", Value.fromBigIntArray(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Swap entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Swap entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Swap", id.toString(), this);
  }

  static load(id: string): Swap | null {
    return store.get("Swap", id) as Swap | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caller(): Bytes {
    let value = this.get("caller");
    return value.toBytes();
  }

  set caller(value: Bytes) {
    this.set("caller", Value.fromBytes(value));
  }

  get tokenIn(): Bytes {
    let value = this.get("tokenIn");
    return value.toBytes();
  }

  set tokenIn(value: Bytes) {
    this.set("tokenIn", Value.fromBytes(value));
  }

  get tokenInSym(): string {
    let value = this.get("tokenInSym");
    return value.toString();
  }

  set tokenInSym(value: string) {
    this.set("tokenInSym", Value.fromString(value));
  }

  get tokenOut(): Bytes {
    let value = this.get("tokenOut");
    return value.toBytes();
  }

  set tokenOut(value: Bytes) {
    this.set("tokenOut", Value.fromBytes(value));
  }

  get tokenOutSym(): string {
    let value = this.get("tokenOutSym");
    return value.toString();
  }

  set tokenOutSym(value: string) {
    this.set("tokenOutSym", Value.fromString(value));
  }

  get tokenAmountIn(): BigDecimal {
    let value = this.get("tokenAmountIn");
    return value.toBigDecimal();
  }

  set tokenAmountIn(value: BigDecimal) {
    this.set("tokenAmountIn", Value.fromBigDecimal(value));
  }

  get tokenAmountOut(): BigDecimal {
    let value = this.get("tokenAmountOut");
    return value.toBigDecimal();
  }

  set tokenAmountOut(value: BigDecimal) {
    this.set("tokenAmountOut", Value.fromBigDecimal(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get userAddress(): string {
    let value = this.get("userAddress");
    return value.toString();
  }

  set userAddress(value: string) {
    this.set("userAddress", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get tx(): Bytes {
    let value = this.get("tx");
    return value.toBytes();
  }

  set tx(value: Bytes) {
    this.set("tx", Value.fromBytes(value));
  }
}

export class JoinExit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save JoinExit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save JoinExit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("JoinExit", id.toString(), this);
  }

  static load(id: string): JoinExit | null {
    return store.get("JoinExit", id) as JoinExit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amounts(): Array<BigDecimal> {
    let value = this.get("amounts");
    return value.toBigDecimalArray();
  }

  set amounts(value: Array<BigDecimal>) {
    this.set("amounts", Value.fromBigDecimalArray(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get tx(): Bytes {
    let value = this.get("tx");
    return value.toBytes();
  }

  set tx(value: Bytes) {
    this.set("tx", Value.fromBytes(value));
  }
}

export class LatestPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LatestPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LatestPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LatestPrice", id.toString(), this);
  }

  static load(id: string): LatestPrice | null {
    return store.get("LatestPrice", id) as LatestPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get pricingAsset(): Bytes {
    let value = this.get("pricingAsset");
    return value.toBytes();
  }

  set pricingAsset(value: Bytes) {
    this.set("pricingAsset", Value.fromBytes(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get price(): BigDecimal {
    let value = this.get("price");
    return value.toBigDecimal();
  }

  set price(value: BigDecimal) {
    this.set("price", Value.fromBigDecimal(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class PoolHistoricalLiquidity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save PoolHistoricalLiquidity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolHistoricalLiquidity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolHistoricalLiquidity", id.toString(), this);
  }

  static load(id: string): PoolHistoricalLiquidity | null {
    return store.get(
      "PoolHistoricalLiquidity",
      id
    ) as PoolHistoricalLiquidity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get poolTotalShares(): BigDecimal {
    let value = this.get("poolTotalShares");
    return value.toBigDecimal();
  }

  set poolTotalShares(value: BigDecimal) {
    this.set("poolTotalShares", Value.fromBigDecimal(value));
  }

  get poolLiquidity(): BigDecimal {
    let value = this.get("poolLiquidity");
    return value.toBigDecimal();
  }

  set poolLiquidity(value: BigDecimal) {
    this.set("poolLiquidity", Value.fromBigDecimal(value));
  }

  get poolShareValue(): BigDecimal {
    let value = this.get("poolShareValue");
    return value.toBigDecimal();
  }

  set poolShareValue(value: BigDecimal) {
    this.set("poolShareValue", Value.fromBigDecimal(value));
  }

  get pricingAsset(): Bytes {
    let value = this.get("pricingAsset");
    return value.toBytes();
  }

  set pricingAsset(value: Bytes) {
    this.set("pricingAsset", Value.fromBytes(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class TokenPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenPrice", id.toString(), this);
  }

  static load(id: string): TokenPrice | null {
    return store.get("TokenPrice", id) as TokenPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): string {
    let value = this.get("poolId");
    return value.toString();
  }

  set poolId(value: string) {
    this.set("poolId", Value.fromString(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get pricingAsset(): Bytes {
    let value = this.get("pricingAsset");
    return value.toBytes();
  }

  set pricingAsset(value: Bytes) {
    this.set("pricingAsset", Value.fromBytes(value));
  }

  get price(): BigDecimal {
    let value = this.get("price");
    return value.toBigDecimal();
  }

  set price(value: BigDecimal) {
    this.set("price", Value.fromBigDecimal(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Investment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Investment entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Investment entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Investment", id.toString(), this);
  }

  static load(id: string): Investment | null {
    return store.get("Investment", id) as Investment | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get assetManagerAddress(): Bytes {
    let value = this.get("assetManagerAddress");
    return value.toBytes();
  }

  set assetManagerAddress(value: Bytes) {
    this.set("assetManagerAddress", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get poolTokenId(): string {
    let value = this.get("poolTokenId");
    return value.toString();
  }

  set poolTokenId(value: string) {
    this.set("poolTokenId", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class PoolSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolSnapshot entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolSnapshot entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolSnapshot", id.toString(), this);
  }

  static load(id: string): PoolSnapshot | null {
    return store.get("PoolSnapshot", id) as PoolSnapshot | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get amounts(): Array<BigDecimal> {
    let value = this.get("amounts");
    return value.toBigDecimalArray();
  }

  set amounts(value: Array<BigDecimal>) {
    this.set("amounts", Value.fromBigDecimalArray(value));
  }

  get totalShares(): BigDecimal {
    let value = this.get("totalShares");
    return value.toBigDecimal();
  }

  set totalShares(value: BigDecimal) {
    this.set("totalShares", Value.fromBigDecimal(value));
  }

  get swapVolume(): BigDecimal {
    let value = this.get("swapVolume");
    return value.toBigDecimal();
  }

  set swapVolume(value: BigDecimal) {
    this.set("swapVolume", Value.fromBigDecimal(value));
  }

  get swapFees(): BigDecimal {
    let value = this.get("swapFees");
    return value.toBigDecimal();
  }

  set swapFees(value: BigDecimal) {
    this.set("swapFees", Value.fromBigDecimal(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}
