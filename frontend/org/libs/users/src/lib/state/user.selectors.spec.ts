import { UserEntity } from './user.models';
import {
  userAdapter,
  UserPartialState,
  initialUserState,
} from './user.reducer';
import * as UserSelectors from './user.selectors';

describe('User Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserId = (it: UserEntity) => it.id;
  const createUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserEntity);

  let state: UserPartialState;

  beforeEach(() => {
    state = {
      user: userAdapter.setAll(
        [
          createUserEntity('PRODUCT-AAA'),
          createUserEntity('PRODUCT-BBB'),
          createUserEntity('PRODUCT-CCC'),
        ],
        {
          ...initialUserState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('User Selectors', () => {
    it('selectAllUser() should return the list of User', () => {
      const results = UserSelectors.selectAllUser(state);
      const selId = getUserId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = UserSelectors.selectEntity(state) as UserEntity;
      const selId = getUserId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectUserLoaded() should return the current "loaded" status', () => {
      const result = UserSelectors.selectUserLoaded(state);

      expect(result).toBe(true);
    });

    it('selectUserError() should return the current "error" state', () => {
      const result = UserSelectors.selectUserError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
