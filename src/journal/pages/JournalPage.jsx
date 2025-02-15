import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thunks'
// import { NothingSelectedView } from '../views/NothingSelectedView'


export const JournalPage = () => {

    const dispatch = useDispatch()
    const { active, isSaving } = useSelector( state => state.journal )

    const onClickNewNote = () => {
        
        dispatch( startNewNote() )

    }

    return (
        <JournalLayout>

            {
                ( !!active )
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton
                onClick={ onClickNewNote }
                disabled={ isSaving === true }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}
