import { Modal, useMantineTheme } from '@mantine/core';

function    ProfileModal({modalopened ,setmodalopened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalopened}
      size="55%"
      onClose={()=>setmodalopened(false)}
    >
        <form className='infoForm'>
            <h3>Your Info</h3>
            <div >
                <input type="text" name="firstname" placeholder='First Name' className='infoInput' />
                <input type="text" name="lastname" placeholder='Last Name' className='infoInput' />
            </div>
            <div>
            <input type="text" name="status" placeholder='Relationship Status' className='infoInput' />
            </div>
            <div>
            <input type="text" name="work" placeholder='Work at' className='infoInput' />
            <input type="text" name="country" placeholder='Country' className='infoInput' />
            </div>
            <div>
            <input type="text" name="live" placeholder='liveIn' className='infoInput' />
            </div>

            <div>
                Profile Img <input type="file" name="profileImg" />
                Cover Img <input type="file" name="coverImg"/>
            
            </div>
            <button className='button info-button'>Update</button>
        </form>
    </Modal>
  );
}
export default  ProfileModal;