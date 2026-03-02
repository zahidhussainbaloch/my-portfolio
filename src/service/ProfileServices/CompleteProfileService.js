export default class CompleteProfileService {
    async getCompleteProfile() {
        try {
            const response = await fetch(`../../../public/demo/data/ProfileData/completeprofile.json`);

            if (!response.ok) {
                throw new Error('Failed to load profile data');
            }

            const json = await response.json();
            return json.data;
        } catch (error) {
            console.error('Profile loading error:', error);
            return null;
        }
    }
}
