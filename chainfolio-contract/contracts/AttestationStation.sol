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

    function setAttestation(
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
}
