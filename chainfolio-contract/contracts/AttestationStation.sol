// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IAttestationStation {
    struct AttestationData {
        address about;
        bytes32 key;
        bytes val;
    }

    event AttestationCreated(
        address indexed creator,
        address indexed about,
        bytes32 indexed key,
        bytes val
    );

    function attest(AttestationData[] memory _attestations) external;
}

contract chainfolio {
    IAttestationStation attestStation;
    address attestStationAddress;
    event AttestationCreated(
        address indexed creator,
        address indexed about,
        bytes32 indexed key,
        bytes val
    );

    constructor() {
        attestStationAddress = 0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77;
        attestStation = IAttestationStation(attestStationAddress);
    }

    function _setAttestation(
        address _about,
        bytes32 _key,
        bytes memory _val
    ) internal {
        IAttestationStation.AttestationData[]
            memory attestations = new IAttestationStation.AttestationData[](1);
        attestations[0] = IAttestationStation.AttestationData({
            about: _about,
            key: _key,
            val: _val
        });
        attestStation.attest(attestations);
    }

    function setSingleData(
        address _about,
        bytes32 _key,
        bytes memory _val
    ) external returns (bool _isTxnDone) {
        _setAttestation(address(this), _key, _val);
        _isTxnDone = true;
    }

    function setData(
        IAttestationStation.AttestationData[] memory _data
    ) external returns (bool _isTxnDone) {
        for (uint256 i = 0; i < _data.length; i++) {
            _setAttestation(address(this), _data[i].key, _data[i].val);
        }
        _isTxnDone = true;
    }
}
