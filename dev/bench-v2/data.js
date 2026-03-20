window.BENCHMARK_DATA = {
  "lastUpdate": 1773986244590,
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
          "id": "690e1c3e59dab5a78ddefb835f58f038b8a218ab",
          "message": "fix: resolve clang-tidy code scanning warnings (#170)\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-18T11:18:04+04:00",
          "tree_id": "2191d68e631a9bf85991af9f2fe6cf93aea2ebce",
          "url": "https://github.com/craigraw/UltrafastSecp256k1/commit/690e1c3e59dab5a78ddefb835f58f038b8a218ab"
        },
        "date": 1773833014751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1010.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7814.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32916.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32383.7,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35831.2,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1269.5,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 146.4,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2641.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10525.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66727.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37973.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7843.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8355.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48478.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38416.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39700.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148990.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37247.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148709.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37177.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605206.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37825.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594431.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37152,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2543104.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39736,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2462490.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38476.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4680401.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36565.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4599005.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35929.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6300126.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32813.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6215975.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32374.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145018,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581113.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2329470,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4653251.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6986024.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1871,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17486.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39238.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21901.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78093.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19330.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59647.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18908.5,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 428.9,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10555,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10494,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47529.3,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11005,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 980,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40734.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40569.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16387.8,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19996.6,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1334,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139881.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161159.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 161001.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48527.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67407.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1174.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.2,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37045.9,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18405.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20343.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35286.8,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2539.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21840.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39451,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 399418.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 424233.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 384176.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57158.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41847.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40673.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81227.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107553,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24383673.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2962144.9,
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
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "47005ffc2926b5f87b076131cdafe6ee21b6a3c8",
          "message": "feat: OpenCL 6/6 verify ops, enrich README, fix QEMU timeout\n\n- Implement ecdsa_verify_batch and schnorr_verify_batch in OpenCL backend\n  via lazy-loaded extended kernel (secp256k1_extended.cl)\n- Enrich README: BIP-352 GPU pipeline, GPU C ABI section, updated tables\n- Update GPU_VALIDATION_MATRIX: OpenCL 4/6 -> 6/6\n- Fix ecies_regression test timeout (120s -> 600s) for QEMU ARM64 CI",
          "timestamp": "2026-03-20T01:46:33Z",
          "tree_id": "243384c9cacee2547a30e955a472b4d36e90c61f",
          "url": "https://github.com/craigraw/UltrafastSecp256k1/commit/47005ffc2926b5f87b076131cdafe6ee21b6a3c8"
        },
        "date": 1773986243546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1009.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1334.2,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7915.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32869.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32328.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35842,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1277.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 146.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.7,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2647.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10576.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66774.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37948.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7945.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8405.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48572.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38433.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39702.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148854.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37213.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148741.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37185.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604692.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37793.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594087.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37130.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2545958.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39780.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2461384.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38459.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4686713.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36614.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4702014.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36734.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6449839.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33592.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6216263.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32376.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144862.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580710.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2328125.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4654771.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6985046.8,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1875.6,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17479.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39096.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 274.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21923.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78052.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19324.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59645.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18907.8,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432.1,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10669.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10606.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48155.2,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11128.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 987,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40579.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40402.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17069.1,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19982.7,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1329.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139807.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160811.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160824.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48461.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67364.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1134.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.3,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37076.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18390.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20310,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34495.4,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2542.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21839.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39457.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392986,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 417105.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 376472.7,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57018.4,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41729.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40758.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80969.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107668.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24376652.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2963976.1,
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