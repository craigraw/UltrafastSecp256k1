window.BENCHMARK_DATA = {
  "lastUpdate": 1773735075313,
  "repoUrl": "https://github.com/craigraw/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d34e9260b5e5e349d120ccc6bb51dd2f07a395f0",
          "message": "ci(deps): bump actions/setup-python from 5.6.0 to 6.2.0 (#149)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python) from 5.6.0 to 6.2.0.\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/v5.6.0...a309ff8b426b58ec0e2a45f0f869d46889d02405)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-python\n  dependency-version: 6.2.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-16T15:57:33+04:00",
          "tree_id": "3f520e9a4cd1ecf80f4023ae0236e261b03e67aa",
          "url": "https://github.com/craigraw/UltrafastSecp256k1/commit/d34e9260b5e5e349d120ccc6bb51dd2f07a395f0"
        },
        "date": 1773665882441,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1053.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1425.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8496.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 35903.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 36034.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 39840.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1347.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 268.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 165.5,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 208.4,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 283.9,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2677.7,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 217.6,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 161.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 11256.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 72845.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 41615.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8493.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9044.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 52329.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 41468.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 42908.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 165827,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 41456.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 673379.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42086.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 4327019.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 67609.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 161729.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 648745.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2587095.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2096.9,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 19467,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 43559.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 166.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 440.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 307.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 300.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 24004.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 86175.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 21079.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65238.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 20644.1,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 474.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 480.4,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 465.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 11292.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 11274.5,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 51495.3,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11897.9,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1041.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44853.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 44689.8,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 18285.7,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 22029.3,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1460.2,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 154418.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 177659.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 177650.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53942.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74911.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1201.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2296.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1238.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 163.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 281.2,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 41122.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 19681.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 22085.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 38533.4,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3077,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 23655.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 43586.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 421672.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 452067.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 404079.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 63497.2,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46342.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 45552.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89896.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 120290.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 27304843.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 5388217,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f6dde593c563653798f01ca9d21c4a757975e69",
          "message": "fix: clear remaining low-level code scanning alerts (#162)\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-17T06:54:30+04:00",
          "tree_id": "410af40c0f0d138e9101aeb86918be76b80f1951",
          "url": "https://github.com/craigraw/UltrafastSecp256k1/commit/5f6dde593c563653798f01ca9d21c4a757975e69"
        },
        "date": 1773735074386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1053.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1425,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8513.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 35977.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 36051.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 39899.1,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1345,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 267.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 164.9,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 208.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 284,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2673.2,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 217.5,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 161.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 11244.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 72816.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 41674.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8514.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9043.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 52059.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 41483.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 42826.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 165763.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 41440.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 672773.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42048.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 4328005.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 67625.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 161875.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 648961.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2590180.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2073.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 19356.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 43627.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 166,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 440.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 306.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 299.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 23885.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 85690.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 21044.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 64335.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 20570.3,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 479.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 479,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 464.4,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 11276.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 11273,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 51395.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11804.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1041.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44925.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 44762.4,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 18280.6,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 21948.5,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1454,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 154264.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 177529.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 177554.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53939.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74789.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1200.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2289.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1241.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 162.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 281,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 41150.1,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 19642.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 22071.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 39617.5,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3081.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 23591,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 43608.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 420972.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 448581.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 400516.3,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 63553.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46319.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 45466.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 90095.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 120206.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 27318403.9,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 5393090.7,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}