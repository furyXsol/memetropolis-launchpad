export type MemeOapp = {
  "version": "0.1.0",
  "name": "pump_fun",
  "instructions": [
    {
      "name": "createGlobalConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "authority to withdraw from bonding_curve_account"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateGlobalConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateGlobalConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin address"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateGlobalConfigParams"
          }
        }
      ]
    },
    {
      "name": "initOapp",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lzReceiveTypesAccounts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitOAppParams"
          }
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTokenParams"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "maxSolCost",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyInSol",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountMin",
          "type": "u64"
        },
        {
          "name": "sol",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin address"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "transferOappAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "TransferOAppAdminParams"
          }
        }
      ]
    },
    {
      "name": "setPeer",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetPeerParams"
          }
        }
      ]
    },
    {
      "name": "lzReceive",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "toAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveParams"
          }
        }
      ]
    },
    {
      "name": "lzReceiveTypes",
      "accounts": [
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveParams"
          }
        }
      ],
      "returns": {
        "vec": {
          "defined": "oapp::endpoint_cpi::LzAccount"
        }
      }
    },
    {
      "name": "quote",
      "accounts": [
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "peer",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "QuoteParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingFee"
      }
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingReceipt"
      }
    }
  ],
  "accounts": [
    {
      "name": "globalConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "oAppConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "endpointProgram",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "lzReceiveTypesAccounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oappConfig",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "peer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "enforcedOptions",
            "type": {
              "defined": "EnforcedOptions"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateGlobalConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "TransferOAppAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "UpdateGlobalConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeRecipient",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeRate",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "CreateTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "bytes"
          },
          {
            "name": "symbol",
            "type": "bytes"
          },
          {
            "name": "uri",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "InitOAppParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "endpointProgram",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "LzReceiveParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "QuoteParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "msgType",
            "type": "u8"
          },
          {
            "name": "tokenAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "toAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ethAmount",
            "type": "u128"
          },
          {
            "name": "tokenAmount",
            "type": "u128"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "composeMsg",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "payInLzToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "SendParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "msgType",
            "type": "u8"
          },
          {
            "name": "tokenAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "toAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ethAmount",
            "type": "u128"
          },
          {
            "name": "tokenAmount",
            "type": "u128"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "composeMsg",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetPeerParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "peer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "EnforcedOptions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "send",
            "type": "bytes"
          },
          {
            "name": "sendAndCall",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "OftError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unauthorized"
          },
          {
            "name": "InvalidSender"
          },
          {
            "name": "InvalidDecimals"
          },
          {
            "name": "SlippageExceeded"
          },
          {
            "name": "InvalidTokenMint"
          },
          {
            "name": "InvalidReceiver"
          },
          {
            "name": "InvalidTokenEscrow"
          },
          {
            "name": "InvalidTokenDest"
          },
          {
            "name": "InvalidOptions"
          },
          {
            "name": "InvalidEndpointProgram"
          },
          {
            "name": "RateLimitExceeded"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateTokenEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenName",
          "type": "string",
          "index": false
        },
        {
          "name": "tokenSymbol",
          "type": "string",
          "index": false
        },
        {
          "name": "tokenUri",
          "type": "string",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "BuyEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solInput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenOutput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SellEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "seller",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solOutput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenInput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "withdrawer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solOutput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenOutput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "OFTSent",
      "fields": [
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "dstEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountSentLd",
          "type": "u64",
          "index": false
        },
        {
          "name": "amountReceivedLd",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "OFTReceived",
      "fields": [
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountReceivedLd",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Already Initialized"
    },
    {
      "code": 6001,
      "name": "AlreadyRaised",
      "msg": "Funding Already Raised"
    },
    {
      "code": 6002,
      "name": "NotEnoughSuppply",
      "msg": "Not enough available supply"
    },
    {
      "code": 6003,
      "name": "InvalidSolAmount",
      "msg": "Incorrect value of SOL sent"
    },
    {
      "code": 6004,
      "name": "InvalidInput",
      "msg": "BondingCurve: Input must be greater than zero"
    },
    {
      "code": 6005,
      "name": "SlippageExceed",
      "msg": "Slippage Exceed"
    }
  ]
};

export const IDL: MemeOapp = {
  "version": "0.1.0",
  "name": "pump_fun",
  "instructions": [
    {
      "name": "createGlobalConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "authority to withdraw from bonding_curve_account"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateGlobalConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateGlobalConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin address"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateGlobalConfigParams"
          }
        }
      ]
    },
    {
      "name": "initOapp",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lzReceiveTypesAccounts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitOAppParams"
          }
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTokenParams"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "maxSolCost",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyInSol",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountMin",
          "type": "u64"
        },
        {
          "name": "sol",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin address"
          ]
        },
        {
          "name": "globalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "transferOappAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "TransferOAppAdminParams"
          }
        }
      ]
    },
    {
      "name": "setPeer",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetPeerParams"
          }
        }
      ]
    },
    {
      "name": "lzReceive",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "toAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedBondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associtedUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveParams"
          }
        }
      ]
    },
    {
      "name": "lzReceiveTypes",
      "accounts": [
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveParams"
          }
        }
      ],
      "returns": {
        "vec": {
          "defined": "oapp::endpoint_cpi::LzAccount"
        }
      }
    },
    {
      "name": "quote",
      "accounts": [
        {
          "name": "oappConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "peer",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "QuoteParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingFee"
      }
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "peer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oappConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingReceipt"
      }
    }
  ],
  "accounts": [
    {
      "name": "globalConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "oAppConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "endpointProgram",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "lzReceiveTypesAccounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oappConfig",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "peer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "enforcedOptions",
            "type": {
              "defined": "EnforcedOptions"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateGlobalConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeRecipient",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "TransferOAppAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "UpdateGlobalConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeRecipient",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "feeRate",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "CreateTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "bytes"
          },
          {
            "name": "symbol",
            "type": "bytes"
          },
          {
            "name": "uri",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "InitOAppParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "endpointProgram",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "LzReceiveParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "QuoteParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "msgType",
            "type": "u8"
          },
          {
            "name": "tokenAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "toAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ethAmount",
            "type": "u128"
          },
          {
            "name": "tokenAmount",
            "type": "u128"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "composeMsg",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "payInLzToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "SendParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "msgType",
            "type": "u8"
          },
          {
            "name": "tokenAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "toAddr",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ethAmount",
            "type": "u128"
          },
          {
            "name": "tokenAmount",
            "type": "u128"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "composeMsg",
            "type": {
              "option": "bytes"
            }
          },
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetPeerParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "peer",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "EnforcedOptions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "send",
            "type": "bytes"
          },
          {
            "name": "sendAndCall",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "OftError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unauthorized"
          },
          {
            "name": "InvalidSender"
          },
          {
            "name": "InvalidDecimals"
          },
          {
            "name": "SlippageExceeded"
          },
          {
            "name": "InvalidTokenMint"
          },
          {
            "name": "InvalidReceiver"
          },
          {
            "name": "InvalidTokenEscrow"
          },
          {
            "name": "InvalidTokenDest"
          },
          {
            "name": "InvalidOptions"
          },
          {
            "name": "InvalidEndpointProgram"
          },
          {
            "name": "RateLimitExceeded"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateTokenEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenName",
          "type": "string",
          "index": false
        },
        {
          "name": "tokenSymbol",
          "type": "string",
          "index": false
        },
        {
          "name": "tokenUri",
          "type": "string",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "BuyEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solInput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenOutput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SellEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "seller",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solOutput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenInput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "withdrawer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "solOutput",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenOutput",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "OFTSent",
      "fields": [
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "dstEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountSentLd",
          "type": "u64",
          "index": false
        },
        {
          "name": "amountReceivedLd",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "OFTReceived",
      "fields": [
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amountReceivedLd",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Already Initialized"
    },
    {
      "code": 6001,
      "name": "AlreadyRaised",
      "msg": "Funding Already Raised"
    },
    {
      "code": 6002,
      "name": "NotEnoughSuppply",
      "msg": "Not enough available supply"
    },
    {
      "code": 6003,
      "name": "InvalidSolAmount",
      "msg": "Incorrect value of SOL sent"
    },
    {
      "code": 6004,
      "name": "InvalidInput",
      "msg": "BondingCurve: Input must be greater than zero"
    },
    {
      "code": 6005,
      "name": "SlippageExceed",
      "msg": "Slippage Exceed"
    }
  ]
};
