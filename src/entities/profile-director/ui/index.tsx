import {MouseEvent, useEffect, useState} from "react";
import {getProfile} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {ProfileDirectorMenu} from "./menu";
import {ProfileDirectorTab} from "./tab";
import {TEST_IMAGE} from "shared/config";


export const ProfileDirector = () => {
  const {data, isLoading} = useSelector((state: RootState) => state.profile);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const dispatch: AppDispatch = useDispatch()

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchor(event.currentTarget);

  const handleClose = () => setAnchor(null);

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <ProfileDirectorTab img={TEST_IMAGE} handleOpen={handleOpen}/>
      <ProfileDirectorMenu open={open} anchor={anchor} handleClose={handleClose}/>
    </>
  )
}