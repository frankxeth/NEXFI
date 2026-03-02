import { Address, AddressMap, ExtendedAddressMap, SchnorrSignature } from '@btc-vision/transaction';
import { CallResult, OPNetEvent, IOP_NETContract } from 'opnet';

// ------------------------------------------------------------------
// Event Definitions
// ------------------------------------------------------------------
export type MintedEvent = {
    readonly to: Address;
    readonly amount: bigint;
};

// ------------------------------------------------------------------
// Call Results
// ------------------------------------------------------------------

/**
 * @description Represents the result of the mint function call.
 */
export type Mint = CallResult<{}, OPNetEvent<MintedEvent>[]>;

/**
 * @description Represents the result of the airdrop function call.
 */
export type Airdrop = CallResult<{}, OPNetEvent<MintedEvent>[]>;

// ------------------------------------------------------------------
// IMyToken
// ------------------------------------------------------------------
export interface IMyToken extends IOP_NETContract {
    mint(address: Address, amount: bigint): Promise<Mint>;
    airdrop(addressAndAmount: AddressMap<bigint>): Promise<Airdrop>;
}
