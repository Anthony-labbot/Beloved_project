import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { XendColors, XendRadii } from '@/constants/xend-theme';

type Props = {
  label: string;
  placeholder: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  secure?: boolean;
} & Omit<TextInputProps, 'placeholder'>;

export function LabeledField({
  label,
  placeholder,
  leftIcon = 'mail-outline',
  secure,
  ...inputProps
}: Props) {
  const [hidden, setHidden] = useState(!!secure);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <Ionicons name={leftIcon} size={20} color={XendColors.textSecondary} style={styles.leftIco} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#6B6B6B"
          style={styles.input}
          secureTextEntry={secure && hidden}
          autoCapitalize="none"
          autoCorrect={false}
          {...inputProps}
        />
        {secure ? (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
            <Ionicons
              name={hidden ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={XendColors.textSecondary}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  label: { color: XendColors.textSecondary, fontSize: 13, fontWeight: '500' },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3C',
    borderRadius: XendRadii.md,
    paddingHorizontal: 14,
    height: 52,
    backgroundColor: '#1A1A1A',
  },
  leftIco: { marginRight: 10 },
  input: {
    flex: 1,
    color: XendColors.text,
    fontSize: 16,
    paddingVertical: 0,
  },
});
