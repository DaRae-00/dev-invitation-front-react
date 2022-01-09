import React, { FC, useCallback, useMemo } from 'react'
import { Product } from '@components/product/types'

type SelectedMenu = 'image' | 'book' | 'editBook'

interface SelectedContext {
  title: string
  images: string[]
  play: boolean
  selectedMenu: SelectedMenu
}

const initialState = {
  title: 'title',
  images: [''],
  play: false,
  selectedMenu: 'image',
}

type Action =
  | {
      type: 'SELECTED_PRODUCT'
      selected: Product
    }
  | {
      type: 'STOP_PRODUCT'
    }
  | {
      type: 'PLAY_PRODUCT'
    }
  | {
      type: 'SELECT_MENU'
      selectedMenu: SelectedMenu
    }

export const SelectedContext = React.createContext<SelectedContext | any>(
  initialState
)
SelectedContext.displayName = 'SelectedProductContext '

function selectedReducer(state: Product, action: Action) {
  switch (action.type) {
    case 'SELECTED_PRODUCT': {
      return {
        ...state,
        ...action.selected,
        play: false,
      }
    }
    case 'STOP_PRODUCT': {
      return {
        ...state,
        play: false,
      }
    }
    case 'PLAY_PRODUCT': {
      return {
        ...state,
        play: state.images.length > 1,
        selectedMenu: 'image',
      }
    }
    case 'SELECT_MENU': {
      return {
        ...state,
        selectedMenu: action.selectedMenu,
        play: false,
      }
    }
  }
}

export const SelectedProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(selectedReducer, initialState)

  const onSetSelectedProduct = useCallback(
    (selected) => dispatch({ type: 'SELECTED_PRODUCT', selected: selected }),
    [dispatch]
  )

  const onPlay = useCallback(
    () => dispatch({ type: 'PLAY_PRODUCT' }),
    [dispatch]
  )
  const onStop = useCallback(
    () => dispatch({ type: 'STOP_PRODUCT' }),
    [dispatch]
  )

  const onSetMenuName = useCallback(
    (selectedMenu) =>
      dispatch({ type: 'SELECT_MENU', selectedMenu: selectedMenu }),
    [dispatch]
  )
  const value = useMemo(
    () => ({
      ...state,
      onSetSelectedProduct,
      onPlay,
      onStop,
      onSetMenuName,
    }),
    [state]
  )

  return <SelectedContext.Provider value={value} {...props} />
}

export const useSelectedProduct = () => {
  const context = React.useContext(SelectedContext)
  if (context === undefined) {
    throw new Error(`useSelectedProduct must be used within a SelectedProvider`)
  }
  return context
}
