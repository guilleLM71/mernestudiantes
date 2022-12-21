import web3 from "./web3";

export const address = "0xA5DaBf3Aa4f79A2F8385F55A6728a47fEC86012a";

export const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			}
		],
		"name": "agregarInstitucion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"name": "CertificadoCreado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"name": "emitirCertificado",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"name": "InstitucionAgreado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "certificados",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorcertistotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorcerts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorinst",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInstituto",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Instituciones",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "InstMostrar",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"name": "obtenerCertificado",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "emisor",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "dirwallet",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "gradoacademico",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "ci",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nombre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timestamp",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hashdoc",
						"type": "string"
					}
				],
				"internalType": "struct CertiContrato.Certificado",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			}
		],
		"name": "verificarInstituto",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, address);

export default contract;
