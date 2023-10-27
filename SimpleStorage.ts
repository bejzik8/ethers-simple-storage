import BN from 'bn.js'
import BigNumber from 'bignumber.js'
import {
    PromiEvent,
    TransactionReceipt,
    EventResponse,
    EventData,
    Web3ContractContext
} from 'ethereum-abi-types-generator'

export interface CallOptions {
    from?: string
    gasPrice?: string
    gas?: number
}

export interface SendOptions {
    from: string
    value?: number | string | BN | BigNumber
    gasPrice?: string
    gas?: number
}

export interface EstimateGasOptions {
    from?: string
    value?: number | string | BN | BigNumber
    gas?: number
}

export interface MethodPayableReturnContext {
    send(options: SendOptions): PromiEvent<TransactionReceipt>
    send(
        options: SendOptions,
        callback: (error: Error, result: any) => void
    ): PromiEvent<TransactionReceipt>
    estimateGas(options: EstimateGasOptions): Promise<number>
    estimateGas(
        options: EstimateGasOptions,
        callback: (error: Error, result: any) => void
    ): Promise<number>
    encodeABI(): string
}

export interface MethodConstantReturnContext<TCallReturn> {
    call(): Promise<TCallReturn>
    call(options: CallOptions): Promise<TCallReturn>
    call(
        options: CallOptions,
        callback: (error: Error, result: TCallReturn) => void
    ): Promise<TCallReturn>
    encodeABI(): string
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
    SimpleStorage,
    SimpleStorageMethodNames,
    SimpleStorageEventsContext,
    SimpleStorageEvents
>
export type SimpleStorageEvents = undefined
export interface SimpleStorageEventsContext {}
export type SimpleStorageMethodNames =
    | 'addPerson'
    | 'nameToFavoriteNumber'
    | 'people'
    | 'retrieve'
    | 'store'
export interface PeopleResponse {
    favoriteNumber: string
    name: string
}
export interface SimpleStorage {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _name Type: string, Indexed: false
     * @param _favoriteNumber Type: uint256, Indexed: false
     */
    addPerson(_name: string, _favoriteNumber: string): MethodReturnContext
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: string, Indexed: false
     */
    nameToFavoriteNumber(
        parameter0: string
    ): MethodConstantReturnContext<string>
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    people(parameter0: string): MethodConstantReturnContext<PeopleResponse>
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    retrieve(): MethodConstantReturnContext<string>
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _favoriteNumber Type: uint256, Indexed: false
     */
    store(_favoriteNumber: string): MethodReturnContext
}
