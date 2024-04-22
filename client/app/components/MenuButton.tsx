"use client"
import { Menu, MenuOpen } from '@mui/icons-material'

function MenuButton({ open, visible, setVisible }: { open: boolean, visible: boolean, setVisible: (visible: boolean) => void }) {

    return (
        <button onClick={() => setVisible(!visible)} className={`visible xl:hidden 2xl:hidden lg:hidden`}>
            {
                open ?
                    <span>
                        <MenuOpen />
                    </span>
                    :
                    <span>
                        <Menu />
                    </span>
            }
        </button >
    )
}

export default MenuButton