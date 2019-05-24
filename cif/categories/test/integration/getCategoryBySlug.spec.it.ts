/*
 * Copyright 2019 diconium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { assert, expect } from 'chai';
import { getBySlug } from '../../src/actions/categories';

const validInput = require('../resources/validGetCategoryBySlug.json');
const invalidInput = require('../resources/invalidGetCategoryBySlug.json');

describe('getCategoryBySlug', () => {
  this.timeout(25000);
  describe('Unit tests', () => {

    it('Should return a 404 error if no category exists with that slug', async () => {
      const { response } = await getBySlug(invalidInput);
      expect(response.error).to.be.equal('CommerceResourceNotFoundError');
    });

    it('Should return a successful response if a category exists with that slug', async () => {
      const { response } = await getBySlug(validInput);
      const { statusCode, body } = response;
      expect(statusCode).to.be.equal(200);
      assert.equal(body.slug, validInput.slug, 'Category exists');
    });
  });
});
