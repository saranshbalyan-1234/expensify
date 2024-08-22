import React,{useState} from 'react';
import {View} from 'react-native';
import AvatarWithIndicator from '@components/AvatarWithIndicator';
import OfflineWithFeedback from '@components/OfflineWithFeedback';
import useCurrentUserPersonalDetails from '@hooks/useCurrentUserPersonalDetails';
import useThemeStyles from '@hooks/useThemeStyles';

type ProfileAvatarWithIndicatorProps = {
    /** Whether the avatar is selected */
    isSelected?: boolean;
};

function ProfileAvatarWithIndicator({isSelected = false}: ProfileAvatarWithIndicatorProps) {
    const styles = useThemeStyles();
    const currentUserPersonalDetails = useCurrentUserPersonalDetails();
    const [isLoading,setIsloading]=useState(false)
    return (
        <OfflineWithFeedback pendingAction={currentUserPersonalDetails.pendingFields?.avatar}>
            <View style={[isSelected && styles.selectedAvatarBorder]}>
                <AvatarWithIndicator
                    source={""}
                    accountID={currentUserPersonalDetails.accountID}
                    isLoading={isLoading}
                />
            </View>
        </OfflineWithFeedback>
    );
}

ProfileAvatarWithIndicator.displayName = 'ProfileAvatarWithIndicator';

export default ProfileAvatarWithIndicator;
