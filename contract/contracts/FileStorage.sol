// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//contract to store file info on the blockchain
contract FileStorage {
	address owner;

	constructor() {
		//initialize the contract owner
		owner = msg.sender;
	}

	struct File {
		string owner;
		string fileName;
		string fileHash;
		string fileType;
		uint256 fileSize;
		uint256 timestamp;
	}

	mapping(string => File) public files;

	//function to add file info to the blockchain
	function addFile(
		string memory _owner,
		string memory _fileName,
		string memory _fileHash,
		string memory _fileType,
		uint256 _fileSize
	) public payable {
		require(files[_fileHash].timestamp == 0, "File already exists");
		require(msg.value >= 0.1 ether, "Payment required");
		require(bytes(_owner).length > 0, "Owner required");
		require(bytes(_fileName).length > 0, "File name required");
		require(bytes(_fileHash).length > 0, "File hash required");
		require(bytes(_fileType).length > 0, "File type required");
		require(_fileSize > 0, "File size required");

		//create a new file object
		File memory newFile = File(
			_owner,
			_fileName,
			_fileHash,
			_fileType,
			_fileSize,
			block.timestamp
		);

		// pay the contract owner for file storage --> 0.02 eth per 5mb
		address contractOwner = owner;
		uint256 storageCost = (_fileSize / 5) * 0.02 ether;
		payable(contractOwner).transfer(storageCost);

		//add the file to the blockchain
		files[_fileHash] = newFile;
	}

	//function to get file info from the blockchain
	function getFile(
		string memory _fileHash
	)
		public
		view
		returns (
			string memory,
			string memory,
			string memory,
			string memory,
			uint256,
			uint256
		)
	{
		require(bytes(_fileHash).length > 0, "File hash required");
		File memory file = files[_fileHash];
		require(bytes(file.owner).length > 0, "File not found");
		return (
			file.owner,
			file.fileName,
			file.fileHash,
			file.fileType,
			file.fileSize,
			file.timestamp
		);
	}

	//function to delete file info from the blockchain
	function deleteFile(string memory _fileHash) public {
		require(bytes(_fileHash).length > 0, "File hash required");
		File memory file = files[_fileHash];
		require(bytes(file.owner).length > 0, "File not found");
		require(
			keccak256(abi.encodePacked(file.owner)) ==
				keccak256(abi.encodePacked(msg.sender)),
			"Unauthorized"
		);
		delete files[_fileHash];
	}

	// function to get the total number of files
	function getTotalFiles() public view returns (uint256) {
		uint256 length = 0;
		for (uint256 i = 0; i < 100; i++) {
			if (bytes(files[string(abi.encodePacked(i))].owner).length > 0) {
				length++;
			}
		}

		return length;
	}

	//function to get all files of the owner
	function getOwnerFiles(
		string memory _owner
	) public view returns (File[] memory) {
		require(bytes(_owner).length > 0, "Owner required");
		File[] memory ownerFiles = new File[](100);
		uint256 index = 0;
		for (uint256 i = 0; i < 100; i++) {
			if (
				keccak256(
					abi.encodePacked(files[string(abi.encodePacked(i))].owner)
				) == keccak256(abi.encodePacked(_owner))
			) {
				ownerFiles[index] = files[string(abi.encodePacked(i))];
				index++;
			}
		}
		return ownerFiles;
	}

	//function to get the total size of files of the user
	function getTotalSize(string memory _owner) public view returns (uint256) {
		require(bytes(_owner).length > 0, "Owner required");
		uint256 totalSize = 0;
		for (uint256 i = 0; i < 100; i++) {
			if (
				keccak256(
					abi.encodePacked(files[string(abi.encodePacked(i))].owner)
				) == keccak256(abi.encodePacked(_owner))
			) {
				totalSize += files[string(abi.encodePacked(i))].fileSize;
			}
		}
		return totalSize;
	}

	// function to get the total amount paid by the user
	function getTotalAmountPaid() public view returns (uint256) {
		return address(this).balance;
	}

	// function to get the current balance of user
	function getBalance() public view returns (uint256) {
		return address(this).balance;
	}
}
