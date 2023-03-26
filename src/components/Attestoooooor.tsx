import { useState } from "react";
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";
import {
  parseString,
  stringifyAttestationBytes,
  encodeRawKey,
} from "@eth-optimism/atst";




/**
 * These react hooks are generated with the wagmi cli via `wagmi generate`
 * @see ROOT/wagmi.config.ts
 */
import {
  useAttestationStationAttest,
  usePrepareAttestationStationAttest,
  useAttestationStationAttestations,
} from "../generated";

/**
 * An example component using the attestation station
 */
export function Attestooooooor() {


  
  
  /**
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { address } = useAccount();
  /**
   * @see https://reactjs.org/docs/hooks-state.html
   */
  const [value, setValue] = useState("Exp");

  /**
   * The key of the attestation
   * @see https://www.npmjs.com/package/@eth-optimism/atst
   */

  /**
   * Value of the attestation
   * @see https://www.npmjs.com/package/@eth-optimism/atst
   */
  
  let args = [];
for (let i = 0; i < workList.length; i++) {
  const orgName = workList[i].orgName;
  const contribution = workList[i].contribution;
  const newAttestation = stringifyAttestationBytes(contribution);
  const key = encodeRawKey(orgName);
  args.push([address!,key!, newAttestation!]);
}

  /**
   * Automatically generated hook to prepare the transaction
   * @see https://wagmi.sh/react/prepare-hooks/usePrepareContractWrite
   */
    
  
  let _keys = [];
  let _values=[];
  for(let  i = 0 ; i < workList.length ; i++ ){
    _keys.push(encodeRawKey(workList[i].orgName));
    _values.push(stringifyAttestationBytes(workList[i].contribution));
  }


  const { config } = usePrepareAttestationStationAttest({

   args,
  });

  /**
   * Automatically generated hook to execute the transaction
   * @see https://wagmi.sh/react/execute-hooks/useContractWrite
   */
  const { data, write } = useAttestationStationAttest({
    ...config,
    onSuccess: () => setValue(""),
  });

  /**
   * Automatically generated hook to read the attestation
   * @see https://wagmi.sh/react/execute-hooks/useContractRead
   */
  const { refetch, data: attestation } = useAttestationStationAttestations({
    args: [address!, address!, key],
  });

  /**
   * Wagmi hook to wait for the transaction to be complete
   * @see https://wagmi.sh/docs/hooks/useWaitForTransaction
   */
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => refetch(),
  });

  return (
    <div>
      <h2>Attestoooooor</h2>
      <div>
        Current attestation: {attestation ? parseString(attestation) : "none"}
      </div>
      <input
        disabled={isLoading}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn1" disabled={!write || isLoading} onClick={() => write?.()}>
        Attest
      </button>
      {isLoading && <ProcessingMessage hash={data?.hash} />}
      <div>
        Gas fee: <span>{config.request?.gasLimit.toString()}</span>
      </div>
    </div>
  );
}

function ProcessingMessage({ hash }: { hash?: `0x${string}` }) {
  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;
  return (
    <span>
      Processing transaction...{" "}
      {etherscan && (
        <a href={`${etherscan.url}/tx/${hash}`}>{etherscan.name}</a>
      )}
    </span>
  );
}


export const workList = [
  {
    orgName: "Example Org 1",
    contribution: "Contributed to project X",
  },
  {
    orgName: "Example Org 2",
    contribution: "Developed feature Y",
  },
  {
    orgName: "Example Org 3",
    contribution: "Designed UI for project Z",
  },
  {
    orgName: "Example Org 4",
    contribution: "Mentored new team members",
  },
  {
    orgName: "Example Org 5",
    contribution: "Organized community events",
  },
  {
      orgName: "Example Org 5",
      contribution: "Organized community events",
    },
    {
      orgName: "Example Org 5",
      contribution: "Organized community events",
    },
];
