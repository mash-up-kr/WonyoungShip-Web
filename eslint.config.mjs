/* eslint-disable import/order */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["import"],
    rules: {
      /**
       * import 순서 규칙 설정
       * 1. 주요 그룹 순서: 내장 모듈 → 외부 패키지 → 내부 모듈 → 부모 디렉토리 → 형제 디렉토리 → 인덱스
       * 2. 절대 경로(@/로 시작)를 내부 그룹 내에서 먼저 배치
       * 3. 각 그룹 내에서 알파벳 순서 유지
       * 4. 서로 다른 임포트 그룹 사이에 새 줄 추가
       *
       * 예시:
       * import fs from 'fs';                     // 내장 모듈
       * import path from 'path';                 // 내장 모듈
       *
       * import axios from 'axios';               // 외부 패키지
       * import React from 'react';               // 외부 패키지
       *
       * import @/components/Button from '@/components/Button';   // 절대 경로 (내부)
       * import @/utils/format from '@/utils/format';            // 절대 경로 (내부)
       *
       * import ../../hooks/useAuth from '../../hooks/useAuth';   // 부모 디렉토리
       *
       * import ./helper from './helper';         // 형제 디렉토리
       * import ./types from './types';           // 형제 디렉토리
       *
       * import . from '.';                      // 인덱스
       */
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  }),
];

export default eslintConfig;
