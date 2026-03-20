window.BENCHMARK_DATA = {
  "lastUpdate": 1773986254887,
  "repoUrl": "https://github.com/craigraw/UltrafastSecp256k1",
  "entries": {
    "Perf Regression Gate": [
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
        "date": 1773665784104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1084.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1300.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7627.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32223,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 31381.1,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34972.4,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1307.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 226,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 134.4,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 177.6,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 242.1,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2174.3,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 185,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 140.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10459.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 65416.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37016.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 12541.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8284,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48037.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37544.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39195.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 143722.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 35930.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 586476,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36654.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3796465.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 59319.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 140410,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 561832.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2266171,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2608.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17186.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 38093.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 132.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 395.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 270.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 261.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 23120.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 77654.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19567,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 58814.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19182.2,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 449.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 445.2,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 445.1,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10448.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10312.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 46779.4,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11053.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 963.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40054.5,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 39771.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 15677.4,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19887.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1376.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139747.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160390.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160692.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 46912.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 65594.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1168.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2782.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1216.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 129,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 227.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34386.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16157.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19033.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 33277.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3403,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20840.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 36916,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392896.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416187.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 369081.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 60955.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 40778.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 39208.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 79108.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 103174.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 23550888.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4620213.4,
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
        "date": 1773735092611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1052.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1339.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7966.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33034.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32645.3,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36176.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1303.8,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 238.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.8,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 256.5,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2675,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 196,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 148.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10694.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 67395.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38052.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 10543.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8534.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48748,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38531.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39829.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 149034.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37258.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604537.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37783.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3976937.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62139.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144802.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580910.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2331568.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1861,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17492,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39130.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 402.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 279.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 272.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22008.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78128.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19446.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59640.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19076.2,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 440.2,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 439.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10661,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10507.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47911.8,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11427.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 989.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40820.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40496.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16390,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19886.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1294.9,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139476.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160976.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160582.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48305.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67490.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1172.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.7,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 244.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37345.9,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18358.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20320.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34791.9,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2537.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21822.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39795.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 389596.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414176.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374813.3,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57517.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41813.5,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41599.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80875.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107684.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24437284.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4912451.6,
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
        "date": 1773832951770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1009.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1343.3,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7982.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33137.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32620,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36319,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1269.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.9,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 251.9,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2692.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10725.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66828.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38047.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8186.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8596.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48539.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38487.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39727.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148920.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37230.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 149095.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37273.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605333.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37833.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 593920.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37120,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2544409.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39756.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2465268,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38519.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4691381.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36651.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4614053,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36047.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6298780,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32806.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6249764.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32550.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144932.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581980.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2333689.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4661107.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6990494.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1877.7,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17472.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39237.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 142.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 270.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22477.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78241.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19442.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59636.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19143.2,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 430.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432.9,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.2,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10658.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10514.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47806,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11220.1,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 976.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 41323,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40648.5,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16312.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 20319.6,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1318.4,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139933.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160892.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160908.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48432.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67630.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1172.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.3,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 248.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37230,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18412.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20314.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34805.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2536.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21789.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39758.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 395287.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416135.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374743.4,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57273.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41836.2,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40628.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81487.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107400,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24413141.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2967477.4,
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
        "date": 1773986253746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1014,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1341.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8081.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33157,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32721.4,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36507.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1277.2,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240.1,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.5,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.4,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2669.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10765.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 67226.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38089.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 10941,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8604.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48705.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38532.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39717.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148965.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37241.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148980.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37245,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 606547.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37909.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594612.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37163.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2546732,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39792.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2463995.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38499.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4683236.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36587.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4599412.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35932.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6297693.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32800.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6232904.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32463,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145176.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581111.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2335536.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4661492.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6990253.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1861.6,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17460.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39030.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 147.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 274.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22194.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78283.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19509.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59897.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19155.4,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432.2,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10779.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10602.8,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48426.2,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11318.9,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1005,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40828.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 41000.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17208.1,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19965.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1318.8,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139980.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161925.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160966,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48445.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67411.6,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1165.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 244.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37346.2,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18413.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20402.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34627.4,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2545.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 22102,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 40046.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 424435.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 418361.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 378695.6,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57108.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41752.8,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40791.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81221.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107610.2,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24419817.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2983315.7,
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