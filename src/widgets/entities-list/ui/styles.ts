import { tss } from 'tss-react'

export const useStyles = tss.create({
  tableWrapper: {
    maxHeight: '73vh',
    overflowX: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  entitiesList: {
    maxWidth: '60vw',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
})
