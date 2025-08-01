import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const ViewScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [followUps, setFollowUps] = useState([
    {
      id: '1',
      followUpDate: '30-07-2025',
      followUpStatus: 'OPEN',
      nextFollowUpDate: '31-07-2025',
      teleCallerName: 'Anusha',
      remarks: 'test',
    },
    {
      id: '2',
      followUpDate: '30-07-2025',
      followUpStatus: 'OPEN',
      nextFollowUpDate: '31-07-2025',
      teleCallerName: 'Anusha',
      remarks: 'test',
    },
    {
      id: '3',
      followUpDate: '30-07-2025',
      followUpStatus: 'OPEN',
      nextFollowUpDate: '31-07-2025',
      teleCallerName: 'Anusha',
      remarks: 'test',
    },
    {
      id: '4',
      followUpDate: '30-07-2025',
      followUpStatus: 'OPEN',
      nextFollowUpDate: '31-07-2025',
      teleCallerName: 'Anusha',
      remarks: 'test',
    },
    {
      id: '5',
      followUpDate: '30-07-2025',
      followUpStatus: 'OPEN',
      nextFollowUpDate: '31-07-2025',
      teleCallerName: 'Anusha',
      remarks: 'test',
    },
  ]);

  const [formData, setFormData] = useState({
    followUpDate: new Date(),
    followUpStatus: '',
    nextFollowUpDate: new Date(),
    teleCallerName: '',
    remarks: '',
  });

  const [showFollowUpDate, setShowFollowUpDate] = useState(false);
  const [showNextFollowUpDate, setShowNextFollowUpDate] = useState(false);

  const handleAddFollowUp = () => {
    const newEntry = {
      id: Date.now().toString(),
      followUpDate: formData.followUpDate.toLocaleDateString(),
      followUpStatus: formData.followUpStatus,
      nextFollowUpDate: formData.nextFollowUpDate.toLocaleDateString(),
      teleCallerName: formData.teleCallerName,
      remarks: formData.remarks,
    };
    setFollowUps((prev) => [...prev, newEntry]);
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Enquiry Details Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Enquiry Details</Text>
        <Text style={styles.detailItem}>Enquiry No: LEAD0016</Text>
        <Text style={styles.detailItem}>Customer Name: Ruby</Text>
        <Text style={styles.detailItem}>Mobile Number: 9212345677</Text>
        <Text style={styles.detailItem}>
          Address: H.No. 1-45, Main Road, Near Z.P. High School,
        </Text>
        <Text style={styles.detailItem}>Model Name: SCOOTY ZEST MATTE SERIES</Text>
        <Text style={styles.detailItem}>State Name: Andhra Pradesh</Text>
        <Text style={styles.detailItem}>District Name: Guntur</Text>
        <Text style={styles.detailItem}>Lead Status: OPEN</Text>
      </View>

      <View style={styles.card}>
  <View style={styles.centeredHeaderRow}>
    <Text style={styles.sectionTitle}>Follow-Ups</Text>
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.addButtonText}>Add</Text>
    </TouchableOpacity>
  </View>

  {followUps.map((item) => (
    <View key={item.id} style={styles.followUpCard}>
      <View style={styles.row}>
        <Text style={styles.key}>Follow-Up Date:</Text>
        <Text style={styles.value}>{item.followUpDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Status:</Text>
        <Text style={styles.value}>{item.followUpStatus}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Next Follow-Up:</Text>
        <Text style={styles.value}>{item.nextFollowUpDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>TeleCaller:</Text>
        <Text style={styles.value}>{item.teleCallerName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Remarks:</Text>
        <Text style={styles.value}>{item.remarks}</Text>
      </View>
    </View>
  ))}
</View>

      {/* Modal Form */}
      <Modal
  visible={modalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <ScrollView contentContainerStyle={styles.modalContent}>
        <Text style={styles.sectionTitle}>Add Follow-Up</Text>

        {/* Follow-Up Date */}
        <Text style={styles.label}>Follow-Up Date</Text>
        <TouchableOpacity
          onPress={() => setShowFollowUpDate(true)}
          style={styles.input}
        >
          <Text>{formData.followUpDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showFollowUpDate && (
          <DateTimePicker
            value={formData.followUpDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowFollowUpDate(false);
              if (date) setFormData({ ...formData, followUpDate: date });
            }}
          />
        )}

        {/* Status */}
        <Text style={styles.label}>Follow-Up Status</Text>
<View style={styles.pickerWrapper}>
  <Picker
    selectedValue={formData.followUpStatus}
    onValueChange={(value) =>
      setFormData({ ...formData, followUpStatus: value })
    }
    style={styles.picker}
  >
    <Picker.Item label="Select Status" value="" />
    <Picker.Item label="OPEN" value="OPEN" />
    <Picker.Item label="CLOSED" value="CLOSED" />
    <Picker.Item label="PENDING" value="PENDING" />
  </Picker>
</View>


        {/* Next Follow-Up Date */}
        <Text style={styles.label}>Next Follow-Up Date</Text>
        <TouchableOpacity
          onPress={() => setShowNextFollowUpDate(true)}
          style={styles.input}
        >
          <Text>{formData.nextFollowUpDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showNextFollowUpDate && (
          <DateTimePicker
            value={formData.nextFollowUpDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowNextFollowUpDate(false);
              if (date) setFormData({ ...formData, nextFollowUpDate: date });
            }}
          />
        )}

        {/* TeleCaller */}
        <Text style={styles.label}>TeleCaller Name</Text>
        <TextInput
          placeholder="TeleCaller Name"
          style={styles.input}
          value={formData.teleCallerName}
          onChangeText={(text) =>
            setFormData({ ...formData, teleCallerName: text })
          }
        />

        {/* Remarks */}
        <Text style={styles.label}>Remarks</Text>
        <TextInput
          placeholder="Remarks"
          style={styles.input}
          value={formData.remarks}
          onChangeText={(text) =>
            setFormData({ ...formData, remarks: text })
          }
        />

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleAddFollowUp}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
</Modal>

    </ScrollView>
  );
};

export default ViewScreen;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F3F4F6',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  followUpCard: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
 sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  flex: 1,
},
  detailItem: {
    fontSize: 14,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  td: {
    fontSize: 13,
    marginBottom: 4,
  },
  addButton: {
  position: 'absolute',
  right: 0,
  paddingHorizontal: 12,
  paddingVertical: 6,
  backgroundColor: '#0c63e7',
  borderRadius: 6,
},
  addButtonText: {
  color: 'white',
  fontWeight: 'bold',
},
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: screenWidth * 0.9,
    maxHeight: '90%',
    padding: 16,
  },
  modalContent: {
    paddingBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 4,
  color: '#333',
},
pickerWrapper: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  marginBottom: 12,
  overflow: 'hidden',
},
picker: {
  height: 50,
  width: '100%',
},
headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 6,
},
key: {
  fontWeight: '600',
  fontSize: 13,
  color: '#333',
  width: '45%',
},
value: {
  fontSize: 13,
  color: '#555',
  textAlign: 'right',
  width: '55%',
},
centerText: {
  textAlign: 'center',
},
centeredHeaderRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8,
  position: 'relative',
},
});
