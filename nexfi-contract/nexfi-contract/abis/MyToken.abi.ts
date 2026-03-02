import { ABIDataTypes, BitcoinAbiTypes, OP_NET_ABI } from 'opnet';

export const MyTokenEvents = [
    {
        name: 'Minted',
        values: [
            { name: 'to', type: ABIDataTypes.ADDRESS },
            { name: 'amount', type: ABIDataTypes.UINT256 },
        ],
        type: BitcoinAbiTypes.Event,
    },
];

export const MyTokenAbi = [
    {
        name: 'mint',
        inputs: [
            { name: 'address', type: ABIDataTypes.ADDRESS },
            { name: 'amount', type: ABIDataTypes.UINT256 },
        ],
        outputs: [],
        type: BitcoinAbiTypes.Function,
    },
    {
        name: 'airdrop',
        inputs: [{ name: 'addressAndAmount', type: ABIDataTypes.ADDRESS_UINT256_TUPLE }],
        outputs: [],
        type: BitcoinAbiTypes.Function,
    },
    ...MyTokenEvents,
    ...OP_NET_ABI,
];

export default MyTokenAbi;
