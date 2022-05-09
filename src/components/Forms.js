import React from "react";
import Block from "../link/block";

const Forms = ({ blockchain, counter, setCounter, validity, setValidity, loadup }) => {
	// variables that hold text from input forms
	let nodeName = "";
	let searchNode = "";

  const handleInsert = (e) => {
    e.preventDefault();
		let node = new Block(nodeName);

		if (blockchain.head === null) {
			blockchain.head = node;
			blockchain.tail = node;
		} else {
			blockchain.tail.next = node;	// make the last node point to new node
			blockchain.tail = node;				// chain's last node is now the new node
		}

		setCounter(counter += 1);
  };

	const handleVerify = (e) => {
		e.preventDefault();

		let ptr = blockchain.head;
		while (ptr) {
			if (searchNode === ptr.footprint) {
				setValidity(true);
				return;
			}

			ptr = ptr.next;
		}

		// else,
		setValidity(false);
		return;
	}

  return (
    <div>
			<h5>Add nodes ("footprints") to this empty blockchain of footprints!</h5>
			{/* Insert footprint message */}
      <form onSubmit={handleInsert}>
        <input
					type="text"
          onChange={e => nodeName = e.target.value}
          placeholder="Type next footprint"
        />

				<button type="submit">Insert</button>
      </form>

			<h5>Then verify a footprint by searching for it!</h5>
			{/* Verify footprint exists on chain */}
			<form onSubmit={handleVerify}>
        <input
          type="text"
					onChange={e => searchNode = e.target.value}
          placeholder="Search for a footprint"
        />

				<button type="submit">Verify</button>
			</form>
    </div>
  );
};

export default Forms;
