let nextId = 0;

// 插入数据
export const insertData = data => (
    Object.assign({}, {
        type: 'INSERT_DATA',
        id: nextId++,
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

// 创建编辑器
export const createEdit = source => (
    Object.assign({}, {
        type: 'CREATE_EDIT',
        id: 'Edit'
    }, source)
)

// 修改编辑器
export const remEdit = (data) => (
    {
        type: 'REM_EDIT',
        data
    }
)

// 移动编辑框

export const removeEdit = (data) => (
    Object.assign({}, {
        type: 'REMOVE_EDIT',
    }, data)
)