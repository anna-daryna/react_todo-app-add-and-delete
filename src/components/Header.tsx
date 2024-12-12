import React, { useEffect, useRef } from 'react';
import { Todo } from '../types/Todo';

interface Props {
  newTitle: string;
  setNewTitle: (title: string) => void;
  onSubmit: (event: React.FormEvent) => void;
  isInputDisabled: boolean;
  todos: Todo[];
}

export const Header: React.FC<Props> = ({
  newTitle,
  setNewTitle,
  onSubmit,
  isInputDisabled,
  todos,
}) => {
  const newTodoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (newTodoInputRef.current && !isInputDisabled) {
      newTodoInputRef.current.focus();
    }
  }, [todos, isInputDisabled]);

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className="todoapp__toggle-all"
        data-cy="ToggleAllButton"
      />
      <form onSubmit={onSubmit}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
          autoFocus
          disabled={isInputDisabled}
        />
      </form>
    </header>
  );
};

export default Header;
