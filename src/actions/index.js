let nextId = 0;

// 插入数据
export const insertData = data => (
    Object.assign({}, {
        type: 'INSERT_DATA',
        id: `${data.mold}-${nextId++}`,
        data
    })
);

// 设置插入类型
export const setInsertMold = mold => (
    {
        type: 'SET_INTER_MOLD',
        mold
    }
)

// 存储插入的类型
export const insertMold = {
    RECT: 'RECT',
    CIRCLE: 'CIRCLE'
}

// 移动
export const translateData = data => (
  Object.assign({}, {
      type: 'TRANSLATE_DATA',
      focus: data.focus,
      mx: data.mx,
      my: data.my
  })
)

// 修改
export const resetData = data => (
    {
        type: 'RESET_DATA',
        focus: data.focus,
        mx: data.mx,
        my: data.my
    }
)


// 当前处于编辑状态下的数据
export const setFocus = data => (
    Object.assign({}, {
        type: 'SET_FOCUS',
        data
    })
)

// 清楚编辑中的数据
export const clearFocus = () => (
    {
        type: 'CLEAR_FOCUS',
    }
)

// 创建编辑器
export const createEdit = source => (
    Object.assign({}, {
        type: 'CREATE_EDIT',
    }, source)
)

// 移动编辑框

export const resetEdit = (data) => (
    Object.assign({}, {
        type: 'RESET_EDIT',
        data
    }, data)
)
